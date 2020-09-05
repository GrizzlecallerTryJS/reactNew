import React from 'react';
import { Field } from 'redux-form';
import { FormControlForLogin, Input, Checkbox } from './../../assets/FormsControls/FormsControls';
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators/Validators';

const maxLength10 = maxLengthCreator(10);
const minLength1 = minLengthCreator(1);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor='Login'>Login</label>
        <Field
          name={'login'}
          component={Input}
          validate={[
            required,
            maxLength10,
            minLength1,
          ]}
        />
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <Field
          name={'password'}
          component={Input}
          validate={[
            required,
            maxLength10,
            minLength1,
          ]}
        />
      </div>
      <div>
        <label htmlFor='rememberMe'>remember Me</label>
        <Field component={Checkbox} name={'rememberMe'} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
