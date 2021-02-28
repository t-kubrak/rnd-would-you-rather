import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnswered extends Component {
    render() {
        const { question, user, authedUser } = this.props

        if (question === null) {
            return <p>This question doesn't exist</p>
        }

        const { id, optionOne, optionTwo } = question
        console.log(user.answers[id]);
        return (
            <li key={id}>
                <img className='avatar' src={user.avatarURL}/>
                <p>Asked by {user.name}</p>
                <p>Results</p>
                {authedUser.answers[id] === 'optionOne'
                    ? <p>{optionOne.text} - Your choice</p>
                    : <p>{optionTwo.text}</p>}
            </li>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]
    const user = users[question.author]

    return {
        authedUser,
        question: question || null,
        user: user || null
    }
}

export default connect(mapStateToProps)(QuestionAnswered)