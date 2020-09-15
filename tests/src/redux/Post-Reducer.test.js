import React from 'react';
import postReducer, { addPost } from '../../../src/redux/Post-Reducer';

/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('length of postData should be incremented', () => {
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
  const action = addPost('beepx7');
  const newState = postReducer(state, action);

  expect(newState.postData.length).toBe(8);
});
