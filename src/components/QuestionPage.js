import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

class QuestionPage extends Component {
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

function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const question = questions[id]
    const user = users[question.author]

    return {
        authedUser,
        question: question || null,
        user: user || null
    }
}

export default connect(mapStateToProps)(QuestionPage)