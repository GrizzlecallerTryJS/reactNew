import Dialogs from './Dialogs';
import { updateNewMessageTextAC, addMessageAC } from '../../redux/Message-Reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    forDialogs: state.forDialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextAC(text));
    },
    addMessage: (message) => {
      dispatch(addMessageAC(message));
    },
  };
};

let dialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);

export default dialogsContainer;
