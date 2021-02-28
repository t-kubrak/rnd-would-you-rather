import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleQuestionAnswer} from "../actions/shared";
import {getAuthedUserProfile} from "../selectors";

class QuestionUnanswered extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { question, authedUserProfile, dispatch } = this.props
        dispatch(handleQuestionAnswer(question, this.state.answer, authedUserProfile));
    }

    handleInputChange = (e) => {
        this.setState({
            answer: e.target.value
        });
    }

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
                <form onSubmit={this.handleSubmit}>
                    <input required type="radio" name='option' id='optionOne' value='optionOne' onChange={this.handleInputChange}/>
                    <label htmlFor="optionOne">{optionOne.text}</label>
                    <br/>
                    <input required type="radio" name='option' id='optionTwo' value='optionTwo' onChange={this.handleInputChange}/>
                    <label htmlFor="optionTwo">{optionTwo.text}</label>
                    <br/>
                    <input type="submit" value='Submit'/>
                </form>
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