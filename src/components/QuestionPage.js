import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionUnanswered from "./QuestionUnanswered";
import QuestionAnswered from "./QuestionAnswered";
import {getAuthedUserProfile} from "../selectors";

class QuestionPage extends Component {
    render() {
        const { question, isAnsweredQuestion } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id } = question

        return (
            isAnsweredQuestion ? <QuestionAnswered id={id}/> : <QuestionUnanswered id={id}/>
        )
    }
}

function mapStateToProps (state, props) {
    const { id } = props.match.params
    const question = state.questions[id]
    const authedUserProfile = getAuthedUserProfile(state);
    const isAnsweredQuestion = Object.keys(authedUserProfile.answers).includes(id)

    return {
        question: question || null,
        isAnsweredQuestion
    }
}

export default connect(mapStateToProps)(QuestionPage)