import React from 'react';
import styles from './ArticleImage.module.css';

const ArticleImage = ({ imageUrl, imageTitle }) => {
    return (
        <img className={styles.image} src={imageUrl} alt={imageTitle}></img>
    )
};

export default ArticleImage;