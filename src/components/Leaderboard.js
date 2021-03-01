import React, {Component} from 'react'
import {connect} from 'react-redux'

class Leaderboard extends Component {
    render() {
        const {users} = this.props

        return (
            Object.keys(users).map(id => {
                let user = users[id]

                return (
                    <li key={user.id}>
                        <img className='avatar' src={user.avatarURL} alt={`${user.name} avatar`}/>
                        <p>{user.name}</p>
                        <p>Questions: {user.questionsCount}</p>
                        <p>Answers: {user.answersCount}</p>
                        <p className="bold">Score: {user.score}</p>
                    </li>
                )
            })
        )
    }
}

function mapStateToProps({users}) {
    const formattedUsers = Object.keys(users).map(id => {
        let user = users[id]
        let questionsCount = user.questions.length;
        let answersCount = Object.keys(user.answers).length;
        let score = questionsCount + answersCount;

        user.questionsCount = questionsCount;
        user.answersCount = answersCount;
        user.score = score;
        return user;
    })

    return {users : formattedUsers.sort((a,b) => b.score - a.score)}
}

export default connect(mapStateToProps)(Leaderboard)