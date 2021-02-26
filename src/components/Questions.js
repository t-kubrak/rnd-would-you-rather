import React, { Component } from 'react'
import { connect } from 'react-redux'

class Questions extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.questions.map((id) => (
            <li key={id}>{id}</li>
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