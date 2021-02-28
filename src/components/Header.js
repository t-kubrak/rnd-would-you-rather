import React, {Component} from 'react'
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'

class Header extends Component {
    handleSignOut = () => {
        // TODO
    }

    render() {
        const {authedUser} = this.props;

        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>New Question</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
                    </li>
                </ul>
                {authedUser
                    ? <button onClick={this.handleSignOut}>Sign out</button>
                    : <NavLink to='/sign-in'>Leaderboard</NavLink>}
            </nav>
        )
    }
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Header)