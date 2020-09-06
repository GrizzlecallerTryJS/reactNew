import React from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { authLoginUser } from './../../redux/Auth-Reducer';
import { Redirect } from 'react-router-dom';

let LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.authLoginUser(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={`/profile/${props.userId}`} />;
  }

  return (
    <div>
      <div className={styles.login_main}>Login Form</div>
      <p />
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.forAuth.isAuth,
    userId: state.forAuth.id,
  };
};

const mdtp = {
  authLoginUser,
};

export default connect(mapStateToProps, mdtp)(Login);
