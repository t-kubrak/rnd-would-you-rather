export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUserAnswers(question, answer, user) {
  return {
    type: UPDATE_USER_ANSWERS,
    question,
    answer,
    user
  }
}

export function saveUserQuestion(question, user) {
  return {
    type: SAVE_USER_QUESTION,
    question,
    user
  }
}