import {RECEIVE_QUESTIONS, SAVE_QUESTION, UPDATE_QUESTION_VOTES} from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case UPDATE_QUESTION_VOTES: {
      const {question, answer, user} = action;

      return {
        ...state,
        [question.id]: {
          ...state[question.id],
          [answer]: {
            ...state[question.id][answer],
            votes: state[question.id][answer].votes.concat([user.id])
          }
        }
      }
    }
    case SAVE_QUESTION: {
      const {question} = action;

      return  {
        ...state,
        [question.id]: question
      }
    }
    default :
      return state
  }
} 