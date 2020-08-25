import MyPosts from './MyPosts';
import { addPost, updateNewPostText, likeButtonCounter } from '../../../redux/Post-Reducer';
import { connect } from 'react-redux';

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

/* const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer; */

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
