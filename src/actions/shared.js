import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
import {receiveUsers, saveUserQuestion, updateUserAnswers} from './users'
import {receiveQuestions, saveQuestion, updateQuestionVotes} from './questions'
import { setLoading } from './loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(setLoading(true))
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setLoading(false))
      })
  }
}

export function handleQuestionAnswer (question, answer, user) {
    return (dispatch) => {
        _saveQuestionAnswer({
            authedUser: user.id, qid: question.id, answer
        }).then(() => {
            dispatch(updateQuestionVotes(question, answer, user))
            dispatch(updateUserAnswers(question, answer, user))
        })
    }
}

export function handleQuestionCreate(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        return _saveQuestion({optionOneText, optionTwoText, author})
            .then((question) => {
                dispatch(saveQuestion(question))
                dispatch(saveUserQuestion(question, author))
            })
    }
}