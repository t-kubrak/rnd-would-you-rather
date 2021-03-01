import {SAVE_USER_QUESTION, RECEIVE_USERS, UPDATE_USER_ANSWERS} from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case UPDATE_USER_ANSWERS: {
      const {question, answer, user} = action;

      return {
        ...state,
        [user.id]: {
          ...state[user.id],
          answers: {
            ...state[user.id].answers,
            [question.id]: answer
          }
        }
      }
    }
    case SAVE_USER_QUESTION: {
      const {question, user} = action;

      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat([question.id])
        }
      }
    }
    default :
      return state
  }
} 