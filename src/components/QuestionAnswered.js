import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAuthedUserProfile} from "../selectors";

class QuestionAnswered extends Component {
    render() {
        const { question, user, authedUserProfile } = this.props

        if (!question) {
            return <p>This question doesn't exist</p>
        }

        const { id, optionOne, optionTwo, votesCount } = question

        return (
            <li key={id}>
                <img className='avatar' src={user.avatarURL}/>
                <p>Asked by {user.name}</p>
                <p>Results:</p>
                <ol>
                    <li>
                        {authedUserProfile.answers[id] === 'optionOne'
                            ? <p className="bold">Would you rather {optionOne.text}? (Your choice)</p>
                            : <p>Would you rather {optionOne.text}?</p>}
                        <p>{optionOne.votes.length} out of {votesCount} votes</p>
                        <p>{optionOne.percentage}%</p>
                    </li>
                    <li>
                        {authedUserProfile.answers[id] === 'optionTwo'
                            ? <p className="bold">Would you rather {optionTwo.text}? (Your choice)</p>
                            : <p>Would you rather {optionTwo.text}?</p>}
                        <p>{optionTwo.votes.length} out of {votesCount} votes</p>
                        <p>{optionTwo.percentage}%</p>
                    </li>
                </ol>


            </li>
        )
    }
}

function mapStateToProps (state, {id}) {
    const {users, questions} = state;
    const authedUserProfile = getAuthedUserProfile(state);
    const question = questions[id]
    const user = users[question.author]
    question.votesCount = question.optionOne.votes.length + question.optionTwo.votes.length;
    question.optionOne.percentage = Math.round(question.optionOne.votes.length / question.votesCount * 100)
    question.optionTwo.percentage = Math.abs(100 - question.optionOne.percentage)

    return {
        authedUserProfile,
        question: question,
        user: user
    }
}

export default connect(mapStateToProps)(QuestionAnswered)