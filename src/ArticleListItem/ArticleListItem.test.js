import React from "react";
import ArticleListItem from "./ArticleListItem";

const articleListItem = {
    title: "test article title",
    shortText: "test article shortText",
    timeStamp: "2018-11-22T15:12:24.000Z",
    displayDate: "November 22nd 2018, 7:12 am"
}

describe("ArticleListItem tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ArticleListItem articleListItem={articleListItem} />);
        expect(container).toMatchSnapshot();
    });
});
