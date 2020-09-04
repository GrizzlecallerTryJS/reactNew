import React from 'react';
import styles from './MyPostsForm.module.css';
import { Field } from 'redux-form';
import { required, maxLengthCreator } from './../../../../utils/validators/Validators';
import { Textarea } from '../../../../assets/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'postField'}
          validate={[
            required,
            maxLength10,
            //minLength2,
          ]}
          label={'postField'}
          component={Textarea}
          placeholder={'enter your message'}
        />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};

export default MyPostsForm;
