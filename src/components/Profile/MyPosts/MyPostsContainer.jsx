import MyPosts from './OLD_MyPosts';
import { updateNewPostTextAC, addPostAC, likeButtonCounterAC } from '../../../redux/Post-Reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postData: state.forPosts.postData,
    newPostText: state.forPosts.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    textAreaUpdateText: (text) => {
      dispatch(updateNewPostTextAC(text));
    },
    likeButtonCounter: (id) => {
      dispatch(likeButtonCounterAC(id));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
