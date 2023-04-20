import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar.jsx'; // adjust the path based on your file structure
import styles from './TopRow.module.css';

const TopRow = () => {
  const [content, setContent] = useState('Initial TopRow content');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className={styles.TopRow}>
      <h1>{content}</h1>
      <NavBar handleContentChange={handleContentChange} />
    </div>
  );
};

export default TopRow;
