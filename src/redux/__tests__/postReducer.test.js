import postReducer, { addPost, deletePost, likeButtonCounter } from '../Post-Reducer';
/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

let state = {
  postData : [
    { id: 1, message: 'BEEP', likeCount: 15, liked: false },
    { id: 2, message: 'BOOP', likeCount: 20, liked: false },
    { id: 3, message: 'BOOP', likeCount: 20, liked: false },
    { id: 4, message: 'I', likeCount: 20, liked: false },
    { id: 5, message: 'AM', likeCount: 20, liked: false },
    { id: 6, message: 'A', likeCount: 20, liked: false },
    { id: 7, message: 'ROBOT', likeCount: 20, liked: false },
  ],
};

test('length of postData should be incremented', () => {
  const action = addPost('beepx7');
  const newState = postReducer(state, action);

  expect(newState.postData.length).toBe(8);
});

test('id new post should be incremented', () => {
  const action = addPost('beepx7');
  const newState = postReducer(state, action);

  expect(newState.postData[7].id).toBe(8);
});

test('LikeCount should be 20', () => {
  const action = addPost('beepx7');
  const newState = postReducer(state, action);

  expect(newState.postData[6].likeCount).toBe(20);
});

test('message should be correct', () => {
  const action = addPost('beepx7');
  const newState = postReducer(state, action);

  expect(newState.postData[7].message).toBe('beepx7');
});

test('after deleting post, post massive length should be decrement', () => {
  const action = deletePost(1);
  const newState = postReducer(state, action);

  expect(newState.postData.length).toBe(6);
});

test('after deleting post with postID = 1, post on position 0 should have message on postID = 2', () => {
  const action = deletePost(1);
  const newState = postReducer(state, action);

  expect(newState.postData[0].message).toBe('BOOP');
});

test('if postId incorrect postData length should not be decrement ', () => {
  const action = deletePost(1000);
  const newState = postReducer(state, action);

  expect(newState.postData.length).toBe(7);
});

test('if like button pushed on post id = 5, likeCounter should be increase', () => {
  const action = likeButtonCounter(5);
  const newState = postReducer(state, action);

  expect(newState.postData[4].likeCount).toBe(21);
});

test('if like button pushed on post id = 6, liked state should be true', () => {
  const action = likeButtonCounter(6);
  const newState = postReducer(state, action);

  expect(newState.postData[5].liked).toBe(true);
});
