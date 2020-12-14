import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AppLayout from "../layout/";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Flashcards from "../pages/flashcards";
// import ProductDetail from "../pages/product-detail";
import Users from "../pages/users";
export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <AppLayout>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/flashcards" component={Flashcards} />
          {/* <PrivateRoute
            exact
            path="/product-detail"
            component={ProductDetail}
          /> */}
          <PrivateRoute exact path="/users" component={Users} />
        </AppLayout>
      </Switch>
    </Router>
  );
};
