import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./components/listPage/ListPage";
import { Container } from "@material-ui/core";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/lists/:id">
            <ListPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
