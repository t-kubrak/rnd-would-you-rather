import React, {Component} from 'react'
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'
import {getAuthedUserProfile} from "../selectors";

class Header extends Component {
    handleSignOut = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        const {authedUser, authedUserProfile} = this.props;

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
                <div>
                    {authedUser ?
                        <div>
                            <button onClick={this.handleSignOut}>Sign out</button>
                            <p className="bold">Hi {authedUserProfile.name}!</p>
                        </div>
                        : <NavLink to='/login'>Login</NavLink>}

                </div>

            </nav>
        )
    }
}

function mapStateToProps (state) {
    const {authedUser} = state;
    const authedUserProfile = getAuthedUserProfile(state);

    return {
        authedUser,
        authedUserProfile
    }
}

export default connect(mapStateToProps)(Header)