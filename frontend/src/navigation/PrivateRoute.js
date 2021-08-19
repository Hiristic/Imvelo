import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [cookies] = useCookies(["jwt", "user"]);
  const allow = cookies?.user && cookies?.jwt;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        allow ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
