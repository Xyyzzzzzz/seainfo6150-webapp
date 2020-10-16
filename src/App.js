import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import ArticleList from './ArticleList/ArticleList'

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return (
    <div className="App">
      <Switch>
        <Route>
          <ArticleList articleList={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
