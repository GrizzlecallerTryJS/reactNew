import Dialogs from './Dialogs';
import { addMessageAC, getDialogs } from '../../redux/Message-Reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    forDialogs : getDialogs(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage : (message) => {
      dispatch(addMessageAC(message));
    },
  };
};

let dialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);

export default dialogsContainer;
