import React from 'react';
import styles from './MyPostsForm.module.css';
import { Field } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from './../../../../utils/validators/Validators';
import { SingleTextArea } from '../../../../assets/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);
const minLength1 = minLengthCreator(1);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'postField'}
          validate={[
            required,
            maxLength10,
            minLength1,
          ]}
          label={'postField'}
          component={SingleTextArea}
        />
      </div>
      <div>
        <button>add post</button>
      </div>
    </form>
  );
};

export default MyPostsForm;
