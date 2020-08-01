import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListPage from "./components/listPage/ListPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <ListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
