import React, {Component} from 'react'
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

class Header extends Component {
    handleSignOut = () => {
        this.props.dispatch(setAuthedUser(null))
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
                    : <NavLink to='/login'>Login</NavLink>}
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