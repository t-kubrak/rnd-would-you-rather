export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'

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