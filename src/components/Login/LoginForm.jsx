import React from 'react';
import { Field } from 'redux-form';
import { Input, Checkbox, Password } from './../../assets/FormsControls/FormsControls';
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
      <div>
        <label htmlFor='Login'>Login</label>
        <Field
          name={'email'}
          component={Input}
          validate={[
            required,
            maxLength30,
            minLength1,
          ]}
          placeholder={'test'}
        />
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <Field
          name={'password'}
          component={Password}
          validate={[
            required,
            maxLength30,
            minLength1,
          ]}
        />
      </div>
      <div>
        <label htmlFor='rememberMe'>remember Me</label>
        <Field component={Checkbox} name={'rememberMe'} />
      </div>
      <div>{props.error && errorTrue()}</div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
