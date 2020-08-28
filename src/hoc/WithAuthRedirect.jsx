import React from 'react';
import { Redirect } from 'react-router-dom';

// Эта функция принимает компонент...
function withAuthRedirect (WrappedComponent){
  // ...и возвращает другой компонент...
  class withAuthRedirect extends React.Component {
    /* constructor (props) {
      super(props);
    } */

    render () {
      let authSate = this.props.isAuth;
      return authSate ? <WrappedComponent {...this.props} /> : <Redirect to={'/login'} />;
    }
  }
  withAuthRedirect.displayName = `withAuthRedirect(${getDisplayName(WrappedComponent)})`;
  return withAuthRedirect;
}

function getDisplayName (WrappedComponent){
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuthRedirect;
