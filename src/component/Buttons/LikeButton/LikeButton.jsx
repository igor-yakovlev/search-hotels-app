import React, { useState } from 'react';

import styles from './LikeButton.module.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    let localLiked = liked;
    localLiked = !localLiked;
    setLiked(localLiked);
  }

    return (
      <div className={styles.like}>

       


      </div>
    );
};

export default LikeButton;
