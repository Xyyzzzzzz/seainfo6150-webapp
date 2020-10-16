import React from "react";

const ArticleListItem = (item) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <time dateTime={item.timeStamp}>{item.displayDate}</time>
            <p>{item.shortText}</p>
        </div>
    );
}

export default ArticleListItem;