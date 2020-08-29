import Dialogs from './Dialogs';
import { updateNewMessageTextAC, addMessageAC } from '../../redux/Message-Reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/WithAuthRedirect';

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
    addMessage: () => {
      dispatch(addMessageAC());
    },
  };
};

//const dialogsContainerWithAuthHOC = withAuthRedirect(Dialogs);

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
