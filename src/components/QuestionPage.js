import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionUnanswered from "./QuestionUnanswered";
import QuestionAnswered from "./QuestionAnswered";

class QuestionPage extends Component {
    render() {
        const { question, user, isAnsweredQuestion } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id } = question

        return (
            isAnsweredQuestion ? <QuestionAnswered id={id}/> : <QuestionUnanswered id={id}/>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const question = questions[id]
    const isAnsweredQuestion = Object.keys(authedUser.answers).includes(id)

    return {
        authedUser,
        question: question || null,
        isAnsweredQuestion
    }
}

export default connect(mapStateToProps)(QuestionPage)