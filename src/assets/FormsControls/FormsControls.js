import React from 'react';
import styles from './FormsControls.module.css';

/* export const Textarea = ({ input, meta: { touched, error }, props }) => {
  const hasError = touched && error;

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        <textarea {...input} {...props} placeholder={'enter your message'} />
      </div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
}; */

/* export const FormControlForLogin = ({ input, type, meta: { touched, error }, props }) => {
  const hasError = touched && error;
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        <input {...input} {...props} type={type} placeholder={type} />
      </div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
}; */

const FormControl = ({ Element, input, type, meta: { touched, error }, props }) => {
  const hasError = touched && error;
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
      <div>
        <Element {...input} {...props} type={type} placeholder={type} />
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
