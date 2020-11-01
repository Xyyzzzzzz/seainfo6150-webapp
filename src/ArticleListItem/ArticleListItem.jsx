import React, { useState } from "react";
import ArticleTextToggleButton from '../ArticleTextToggleButton/ArticleTextToggleButton'
import styles from './ArticleListItem.module.css'

const ArticleListItem = (item) => {
    const [buttonText, setButtonText] = useState('Show more');
    const articleText = buttonText === 'Show less' ?
        <div>
            <p className={styles.articleText}>{item.shortText}</p>
            <time className={styles.articleTime} dateTime={item.timeStamp}>{item.displayDate}</time>
        </div> : null;

    const onClick = () => {
        buttonText === 'Show more' ?
            setButtonText('Show less') : setButtonText('Show more');
    };

    return (
        <div className={styles.articleItem}>
            <h1 className={styles.articleTitle}>{item.title}</h1>
            {articleText}
            <ArticleTextToggleButton buttonText={buttonText} onClick={onClick} />
        </div>
    );
}

export default ArticleListItem;