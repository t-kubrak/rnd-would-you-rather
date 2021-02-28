import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionLink from "./QuestionLink";
import {getAuthedUserProfile} from "../selectors";

class Questions extends Component {
    render() {
        return (
            <div>
                <p>Unanswered</p>
                <ul>
                    {this.props.unAnsweredQuestions.map((id) => (
                        <QuestionLink key={id} id={id}/>
                    ))}
                </ul>
                <p>Answered</p>
                <ul>
                    {this.props.answeredQuestions.map((id) => (
                        <QuestionLink key={id} id={id}/>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {questions} = state;
    const authedUserProfile = getAuthedUserProfile(state);
    const answeredQuestions = Object.keys(questions)
        .filter(id => Object.keys(authedUserProfile.answers).includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unAnsweredQuestions = Object.keys(questions)
        .filter(id => !Object.keys(authedUserProfile.answers).includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        answeredQuestions,
        unAnsweredQuestions
    }
}

export default connect(mapStateToProps)(Questions) 