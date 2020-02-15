import { FETCH_QUESTIONS } from '../actionTypes';

const receiveQuestions = questions => ({
  type: FETCH_QUESTIONS,
  questions,
});

export const requestQuestions = _ => {
  return dispatch => {
    fetch('http://localhost:3300/questions')
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(receiveQuestions(data));
      });
  };
};
