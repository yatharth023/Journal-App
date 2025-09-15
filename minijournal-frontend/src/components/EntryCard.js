import React from 'react';
import styles from './EntryCard.module.css';

const EntryCard = ({ entry, onEdit, onDelete }) => (
  <div className={styles.card}>
    <div className={styles.date}>{new Date(entry.date).toLocaleString()}</div>
    <div className={styles.mood}>Mood: {entry.mood}</div>
    <div className={styles.content}>{entry.content}</div>
    <div className={styles.actions}>
      <button className={`${styles.button} ${styles.edit}`} onClick={() => onEdit(entry)}>Edit</button>
      <button className={`${styles.button} ${styles.delete}`} onClick={() => onDelete(entry._id)}>Delete</button>
    </div>
  </div>
);

export default EntryCard;