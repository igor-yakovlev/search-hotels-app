import React from 'react';
import styles from './SortButton.module.css';

const SortButton = ({children, ...props}) => {

  

  return (
      <button {...props} className={styles.button}>
        {children}
      </button>
  );
};

export default SortButton;
