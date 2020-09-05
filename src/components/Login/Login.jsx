import React from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { authLoginUser } from './../../redux/Auth-Reducer';

let LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.authLoginUser(formData.email, formData.password, formData.rememberMe);
  };

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

const mdtp = {
  authLoginUser,
};

export default connect(null, mdtp)(Login);
