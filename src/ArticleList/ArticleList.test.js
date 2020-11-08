import React from "react";
import ArticleList from "./ArticleList";

const articleList = [{
    title: "test article title",
    shortText: "test article shortText",
    timeStamp: "2018-11-22T15:12:24.000Z",
    displayDate: "November 22nd 2018, 7:12 am"
}, {
    title: "test article title2",
    shortText: "test article shortText2",
    timeStamp: "2018-11-22T15:12:24.000Z",
    displayDate: "November 22nd 2018, 7:12 am"
}]

describe("ArticleList tests", () => {
    it("renders correctly", () => {
        const { container } = render(<ArticleList articleList={articleList} />);
        expect(container).toMatchSnapshot();
    });
});
