import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleQuestionAnswer} from "../actions/shared";
import {getAuthedUserProfile} from "../selectors";

class QuestionUnanswered extends Component {
    render() {
        const { question, user } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id, optionOne, optionTwo } = question

        return (
            <li key={id}>
                <img className='avatar' src={user.avatarURL}/>
                <p>{user.name} asks:</p>
                <p>Would you rather</p>
                <p>{optionOne.text} or {optionTwo.text}</p>
            </li>
        )
    }
}

function mapStateToProps (state, {id}) {
    const {authedUser, users, questions} = state;
    const authedUserProfile = getAuthedUserProfile(state);
    const question = questions[id]
    const user = users[question.author]

    return {
        authedUserProfile,
        question: question || null,
        user: user || null
    }
}

export default connect(mapStateToProps)(QuestionUnanswered)