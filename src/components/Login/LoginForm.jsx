import React from 'react';
import { Field } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor='Login'>Login</label>
        <Field placeholder={'login'} name={'login'} component={'input'} />
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <Field placeholder={'password'} name={'password'} component={'input'} />
      </div>
      <div>
        <label htmlFor='rememberMe'>remember Me</label>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
