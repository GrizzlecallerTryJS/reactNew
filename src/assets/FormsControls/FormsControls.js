import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css';

const FormControl = ({ Element, input, type, meta: { touched, error }, props }) => {
  const hasError = touched && error;
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        <Element {...input} {...props} type={type} placeholder={input.name} />
      </div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const SingleTextArea = (props) => {
  return <FormControl {...props} Element={'textarea'} type={'input'} />;
};

export const Input = (props) => {
  return <FormControl {...props} Element={'input'} type={'input'} />;
};

export const Checkbox = (props) => {
  return <FormControl {...props} Element={'Input'} type={'checkbox'} />;
};

export const Password = (props) => {
  return <FormControl {...props} Element={'Input'} type={'password'} />;
};

export const creatorForField = (name, component, validators = []) => {
  return (
    <div>
      <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <Field
        name={name}
        component={component}
        validate={[
          ...validators,
        ]}
        placeholder={name}
      />
    </div>
  );
};
