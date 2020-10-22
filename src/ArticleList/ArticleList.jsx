import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import { isEmpty } from "lodash";
import styles from './ArticleList.module.css'

const ArticleList = ({ articleList }) => {
    const displayContent =
        isEmpty(articleList) ?
            <div>You have no data!</div> :
            <ul className={styles.articleList}>
                {articleList.map((item, index) =>
                    <li key={index}>{ArticleListItem(item)}</li>
                )}
            </ul>

    return displayContent;
};

export default ArticleList;
