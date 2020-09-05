import React from 'react';
import styles from './DialogsForm.module.css';
import { Field } from 'redux-form';
import { SingleTextArea } from '../../../assets/FormsControls/FormsControls';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/Validators';

const maxLength10 = maxLengthCreator(10);
const minLength1 = minLengthCreator(1);

const DialogsForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={'dialogField'}
            component={SingleTextArea}
            validate={[
              required,
              maxLength10,
              minLength1,
            ]}
          />
          <button>add post</button>
        </div>
      </form>
    </div>
  );
};

export default DialogsForm;
