export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTION_VOTES = 'UPDATE_QUESTION_VOTES'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function updateQuestionVotes(question, answer, user) {
  return {
    type: UPDATE_QUESTION_VOTES,
    question,
    answer,
    user
  }
}