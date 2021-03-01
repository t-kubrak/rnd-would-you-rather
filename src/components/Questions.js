import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionLink from "./QuestionLink";
import {getAuthedUserProfile} from "../selectors";

class Questions extends Component {
    render() {
        return (
            <div className="questions-list">
                <div>
                    <p>Unanswered</p>
                    <ul>
                        {this.props.unAnsweredQuestions.map((id) => (
                            <QuestionLink key={id} id={id}/>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>Answered</p>
                    <ul>
                        {this.props.answeredQuestions.map((id) => (
                            <QuestionLink key={id} id={id}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {questions, loading} = state;
    const authedUserProfile = getAuthedUserProfile(state);
    const answeredQuestions = Object.keys(questions)
        .filter(id => Object.keys(authedUserProfile.answers).includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unAnsweredQuestions = Object.keys(questions)
        .filter(id => !Object.keys(authedUserProfile.answers).includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        answeredQuestions,
        unAnsweredQuestions,
        loading
    }
}

export default connect(mapStateToProps)(Questions) 