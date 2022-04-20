import React, { useState } from 'react';
import styles from './SortButton.module.css';

const SortButton = ({children, sort, id}) => {

  const [active, setActive] = useState(false);


  const handleSort = ({target}) => {
    sort(target.id);
    setActive(prev => !prev)
  }


  return (
      <button  id={id} onClick={handleSort} className={active ? `${styles.button} ${styles.active}` : styles.button}>
        {children}
      </button>
  );
};

export default SortButton;
