import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForHOC = (state) => {
  return {
    isAuth: state.forAuth.isAuth,
  };
};

// Эта функция принимает компонент...
function withAuthRedirect(WrappedComponent) {
  // ...и возвращает другой компонент...
  class RedirectComponent extends React.Component {
    /* constructor (props) {
      super(props);
    } */

    render() {
      let authState = this.props.isAuth;
      return authState ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to={"/login"} />
      );
    }
  }
  RedirectComponent.displayName = `RedirectComponent(${getDisplayName(
    WrappedComponent
  )})`;
  return connect(mapStateToPropsForHOC)(RedirectComponent);
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuthRedirect;
