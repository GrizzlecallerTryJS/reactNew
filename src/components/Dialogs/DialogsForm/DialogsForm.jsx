import React from 'react';
import styles from './DialogsForm.module.css';
import { Field } from 'redux-form';

const DialogsForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={'dialogField'} component={'textarea'} placeholder={'enter your message'} />
          <button>add post</button>
        </div>
      </form>
    </div>
  );
};

export default DialogsForm;
