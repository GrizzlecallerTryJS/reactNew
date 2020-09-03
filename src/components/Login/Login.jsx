import React from 'react';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';

let LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
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

export default Login;
