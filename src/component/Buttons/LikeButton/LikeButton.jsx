import React, { useState } from 'react';
import {  faHeart } from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './LikeButton.module.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    let localLiked = liked;
    localLiked = !localLiked;
    setLiked(localLiked);
  }

    return (
      <div onClick={handleLikeClick} className={styles.like}>
        {liked === false ? (
              // <FontAwesomeIcon className={styles.heart} icon={ faHeartRegular } size='ls' />
              <div className={styles.like__icon}></div>
            ) : (
              // <FontAwesomeIcon className={styles.heart} icon={faHeart} size='ls' />
              <div className={styles.like__icon_active}></div>
            )}
      </div>
    );
};

export default LikeButton;
