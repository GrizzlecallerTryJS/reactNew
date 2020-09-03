import MyPosts from './MyPosts';
import { addPost, likeButtonCounter } from '../../../redux/Post-Reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    postData: state.forPosts.postData,
    newPostText: state.forPosts.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postMessage) => {
      dispatch(addPost(postMessage));
    },
    likeButtonCounter: (id) => {
      dispatch(likeButtonCounter(id));
    },
  };
};

/* let mapDispatchToProps = {
  addPost,
  likeButtonCounter,
}; */

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);

//export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
