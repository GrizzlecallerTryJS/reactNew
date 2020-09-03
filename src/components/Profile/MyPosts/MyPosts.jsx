import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm } from 'redux-form';
import MyPostsForm from './MyPostsForm/MyPostsForm';

let MyPostsFormRedux = reduxForm({ form: 'myPostsForm' })(MyPostsForm);
class MyPosts extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс
  /* constructor (props) {
    super(props);
  } */

  postData = this.props.postData;

  addPost = (values) => {
    this.props.addPost(values.postField);
  };

  render () {
    debugger;
    const PostMap = this.postData.map((post) => {
      return (
        <Post
          id={post.id}
          message={post.message}
          liked={post.liked}
          likeCount={post.likeCount}
          likeButtonCounter={this.props.likeButtonCounter}
          key={post.id}
        />
      );
    });
    return (
      <div>
        <div>
          <div>MyPosts component below</div>
          <div>----------</div>
          <div>
            <h2>My Post</h2>
          </div>
        </div>
        <div className={styles.text_area}>
          <MyPostsFormRedux onSubmit={this.addPost} />
        </div>
        <div className={styles.posts}>{PostMap}</div>
      </div>
    );
  }
}

export default MyPosts;
