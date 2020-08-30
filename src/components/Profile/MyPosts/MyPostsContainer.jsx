import MyPosts from './MyPosts';
import { addPost, updateNewPostText, likeButtonCounter } from '../../../redux/Post-Reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    postData: state.forPosts.postData,
    newPostText: state.forPosts.newPostText,
  };
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
  };
}; */

let mapDispatchToProps = {
  addPost,
  updateNewPostText,
  likeButtonCounter,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);

//export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
