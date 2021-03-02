import React, {Component} from 'react'
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'
import {getAuthedUserProfile} from "../selectors";
import {Menu} from "semantic-ui-react";

class Header extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleSignOut = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render() {
        const {authedUser, authedUserProfile} = this.props;
        const { activeItem } = this.state

        return (
            <nav>
                <Menu color='teal' inverted widths={3}>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={NavLink} to='/' exact
                    />
                    <Menu.Item
                        name='add'
                        active={activeItem === 'add'}
                        onClick={this.handleItemClick}
                        as={NavLink} to='/add'
                    />
                    <Menu.Item
                        name='leaderboard'
                        active={activeItem === 'leaderboard'}
                        onClick={this.handleItemClick}
                        as={NavLink} to='/leaderboard'
                    />
                </Menu>
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