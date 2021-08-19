import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CustomThemeProvider } from "../theme/ThemeProvider";
import CenterSpinner from "../components/common/Spinner/CenterSpinner";
import { NavBar } from "../components/NavBar";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../features/dashboard/Dashboard";

const Products = lazy(() => import("../features/products/Products"));
const Login = lazy(() => import("../features/authentication/Login"));

const Navigation = () => {
  return (
    <Router>
      <CustomThemeProvider>
        <NavBar />
        <Suspense fallback={<CenterSpinner />}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/products" exact component={Products} />
            <PrivateRoute path="/" exact component={Dashboard} />
            <Route path="*" exact component={() => <h1>404 not found</h1>} />
          </Switch>
        </Suspense>
      </CustomThemeProvider>
    </Router>
  );
};

export default Navigation;
