import React, { useState, useEffect } from 'react';
import styles from './EntryEditor.module.css';

const moods = ['happy', 'sad', 'neutral', 'angry', 'excited', 'anxious'];

const EntryEditor = ({ initialContent = '', initialMood = 'neutral', onSave, onCancel }) => {
  const [content, setContent] = useState(initialContent);
  const [mood, setMood] = useState(initialMood);

  useEffect(() => {
    setContent(initialContent);
    setMood(initialMood);
  }, [initialContent, initialMood]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSave(content, mood);
      setContent('');
      setMood('neutral');
    }
  };

  return (
    <form className={styles.editor} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Write your journal entry..."
        rows={4}
      />
      <select
        className={styles.select}
        value={mood}
        onChange={e => setMood(e.target.value)}
      >
        {moods.map(m => <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>)}
      </select>
      <div className={styles.actions}>
        <button className={styles.button} type="submit">Save</button>
        {onCancel && <button className={`${styles.button} ${styles.cancel}`} type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default EntryEditor;