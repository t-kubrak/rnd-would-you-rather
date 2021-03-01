import React from "react";
import {Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={function(props) {
        return rest.authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}
export default withRouter(connect(mapStateToProps)(ProtectedRoute));