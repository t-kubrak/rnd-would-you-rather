import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./Question";

class Questions extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.questions.map((id) => (
            <Question id={id} />
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Questions) 