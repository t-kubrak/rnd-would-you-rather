export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_QUESTION_VOTES = 'UPDATE_QUESTION_VOTES'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions(questions) {
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

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question,
    }
}