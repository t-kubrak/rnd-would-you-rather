import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

class QuestionLink extends Component {
    render() {
      const { question, user } = this.props
  
      if (question === null) {
        return <p>This question doesn't exist</p>
      }
  
      const { id, optionOne} = question
  
      return (
        <li>
          <img className='avatar' src={user.avatarURL}/>
          <p>{user.name} asks:</p>
          <p>Would you rather</p>
          <p>{optionOne.text} or ...</p>
          <Link to={`/questions/${id}`}>View poll</Link>
        </li>
      )
    }
  }
  
  function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
    const user = users[question.author]
  
    return {
      authedUser,
      question: question || null,
      user: user || null
    }
  }
  
  export default connect(mapStateToProps)(QuestionLink)