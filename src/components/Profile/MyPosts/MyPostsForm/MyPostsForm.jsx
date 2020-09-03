import React from 'react';
import styles from './MyPostsForm.module.css';
import { Field } from 'redux-form';

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'postField'} component={'textarea'} placeholder={'enter your message'} />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};

export default MyPostsForm;
