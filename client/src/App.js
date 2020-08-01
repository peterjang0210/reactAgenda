import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListPage from "./components/listPage/ListPage";
import { Container } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/">
            <ListPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
