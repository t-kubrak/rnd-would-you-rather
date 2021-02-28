import {_getQuestions, _getUsers, _saveQuestionAnswer} from '../utils/_DATA'
import {receiveUsers, updateUserAnswers} from './users'
import {receiveQuestions, updateQuestionVotes} from './questions'
import {setAuthedUser} from './authedUser'

const AUTHED_ID = 'sarahedo'

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

export function handleQuestionAnswer (question, answer, user) {
    return (dispatch, getState) => {
        _saveQuestionAnswer({
            authedUser: user.id, qid: question.id, answer
        }).then(() => {
            dispatch(updateQuestionVotes(question, answer, user))
            dispatch(updateUserAnswers(question, answer, user))
        })
    }
}