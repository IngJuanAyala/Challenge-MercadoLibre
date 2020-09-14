import React from "react";
import { connect } from "react-redux";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import history from "../utils/history";
import NotFound from "../components/NotFound";
import Container from "../components/Container";
import ProductDetail from "../components/ProductDetail";

const App = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route path="/items/:search?" component={Container} />
      <Route path="/items/:id" component={ProductDetail} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
