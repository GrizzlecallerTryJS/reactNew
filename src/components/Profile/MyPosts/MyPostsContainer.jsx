import MyPosts from './MyPosts';
import { addPost, likeButtonCounter, getPostData } from '../../../redux/Post-Reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    postData: getPostData(state),
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
