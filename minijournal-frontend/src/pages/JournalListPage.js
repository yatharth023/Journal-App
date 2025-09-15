import React, { useEffect, useState } from 'react';
import { getEntries, createEntry, updateEntry, deleteEntry } from '../services/api';
import EntryCard from '../components/EntryCard';
import EntryEditor from '../components/EntryEditor';
import styles from './JournalListPage.module.css';

const JournalListPage = () => {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  const fetchEntries = async () => {
    try {
      const res = await getEntries();
      setEntries(res.data);
    } catch (err) {
      alert('Failed to fetch entries');
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSave = async (content, mood) => {
    try {
      if (editingEntry) {
        await updateEntry(editingEntry._id, { content, mood });
        setEditingEntry(null);
      } else {
        await createEntry({ title: 'Untitled', content, mood });
      }
      fetchEntries();
    } catch (err) {
      alert('Failed to save entry');
    }
  };

  const handleEdit = (entry) => setEditingEntry(entry);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this entry?')) {
      try {
        await deleteEntry(id);
        fetchEntries();
      } catch (err) {
        alert('Failed to delete entry');
      }
    }
  };

  const handleCancel = () => setEditingEntry(null);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>My Journal</div>
        <EntryEditor
          initialContent={editingEntry ? editingEntry.content : ''}
          initialMood={editingEntry ? editingEntry.mood : 'neutral'}
          onSave={handleSave}
          onCancel={editingEntry ? handleCancel : undefined}
        />
        <div className={styles.entriesList}>
          {entries.map(entry => (
            <EntryCard
              key={entry._id}
              entry={entry}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalListPage;