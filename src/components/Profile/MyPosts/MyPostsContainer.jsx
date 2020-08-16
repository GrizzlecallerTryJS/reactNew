import MyPosts from './MyPosts';
import { updateNewPostTextAC, addPostAC, likeButtonCounterAC } from '../../../redux/Post-Reducer';
import { connect } from 'react-redux';

/* const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().forPosts;

        let addPost = () => {
          store.dispatch(addPostAC());
        };

        let textAreaUpdateText = (text) => {
          store.dispatch(updateNewPostTextAC(text));
        };

        const likeButtonCounter = (id) => {
          return store.dispatch(likeButtonCounterAC(id));
        };

        return (
          <MyPosts
            postData={state.postData}
            newPostText={state.newPostText}
            addPost={addPost}
            textAreaUpdateText={textAreaUpdateText}
            likeButtonCounter={likeButtonCounter}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}; */

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
