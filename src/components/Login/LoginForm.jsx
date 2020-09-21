import React from 'react';
import { Field } from 'redux-form';
import { Input, Checkbox, Password, creatorForField } from './../../assets/FormsControls/FormsControls';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/Validators';
import styles from './../../assets/FormsControls/FormsControls.module.css';

const maxLength30 = maxLengthCreator(30);
const minLength1 = minLengthCreator(1);

const LoginForm = (props) => {
  const errorTrue = () => {
    return (
      <div className={styles.formSummaty}>
        <span>{props.error}</span>
      </div>
    );
  };

  return (
    <form onSubmit={props.handleSubmit}>
      {creatorForField('email', Input, [
        required,
        maxLength30,
        minLength1,
      ])}
      {creatorForField('password', Password, [
        required,
        maxLength30,
        minLength1,
      ])}
      {creatorForField('rememberMe', Checkbox)}
      <div>{props.error && errorTrue()}</div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
