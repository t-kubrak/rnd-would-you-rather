import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAuthedUserProfile} from "../selectors";

class QuestionAnswered extends Component {
    render() {
        const { question, user, authedUserProfile } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id, optionOne, optionTwo } = question

        return (
            <li key={id}>
                <img className='avatar' src={user.avatarURL}/>
                <p>Asked by {user.name}</p>
                <p>Results</p>
                <p>{optionOne.text} {authedUserProfile.answers[id] === 'optionOne' ? '- Your choice'  : ''}</p>
                <p>{optionTwo.text} {authedUserProfile.answers[id] === 'optionTwo' ? '- Your choice'  : ''}</p>
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

export default connect(mapStateToProps)(QuestionAnswered)