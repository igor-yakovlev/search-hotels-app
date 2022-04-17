import React, { useState } from 'react';
import styles from './LikeButton.module.css';

const LikeButton = ({onClick, liked}) => {
    return (
      <div onClick={onClick} className={styles.like}>
        {liked === false ? (
              <div className={styles.like__icon}></div>
            ) : (
              <div className={styles.like__icon_active}></div>
            )}
      </div>
    );
};

export default LikeButton;
