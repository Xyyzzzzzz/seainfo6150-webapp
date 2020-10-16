import React from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import { isEmpty } from "lodash";

const ArticleList = ({ articleList }) => {
    const displayContent =
        isEmpty(articleList) ?
            <div>You have no data!</div> :
            <ul>
                {articleList.map((item, index) =>
                    <li key={index}>{ArticleListItem(item)}</li>
                )}
            </ul>

    return displayContent;
};

export default ArticleList;
