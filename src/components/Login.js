import React, { Component } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch, withRouter} from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component{
    state = {
        user: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.user) {
            this.props.dispatch(setAuthedUser(this.state.user));
        }
    }

    handleInputChange = (e) => {
        this.setState({
            user: e.target.value
        });
    }

    render() {
        const {users, authedUser} = this.props;
        if (authedUser) {
            return (
                <Redirect
                    to={{
                        pathname: "/",
                    }}
                />
            )
        }

        return (
            <div>
                <p>Welcome! Please sign in to access Would You Rather App</p>
                <form onSubmit={this.handleSubmit}>
                    <select name="users" id="users" onChange={this.handleInputChange}>
                        <option value="">Select user</option>
                        {Object.keys(users).map(id =>
                            <option key={id} value={id}>{users[id].name}</option>
                        )}
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({users, authedUser}) {
    return {
        users, authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Login))