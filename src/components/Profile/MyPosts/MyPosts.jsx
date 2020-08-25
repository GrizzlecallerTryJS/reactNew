import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends React.Component {
  // конструктор закоменчен, только потому что его не обязательно писать, т.к.
  // единственное его предназначение передавать пропсы в родительский класс
  /* constructor (props) {
    super(props);
  } */

  postData = this.props.postData;

  addPost = () => {
    this.props.addPost();
  };

  updateNewPostText = (element) => {
    let text = element.target.value;
    this.props.updateNewPostText(text);
  };

  render () {
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
          <div>
            <textarea onChange={this.updateNewPostText} value={this.props.newPostText} />
          </div>
          <div>
            <button onClick={this.addPost}>add post</button>
          </div>
        </div>
        <div className={styles.posts}>{PostMap}</div>
      </div>
    );
  }
}

export default MyPosts;
