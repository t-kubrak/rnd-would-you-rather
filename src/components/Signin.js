import React, { Component } from 'react'
import { connect } from 'react-redux'

class Signin extends Component{
    /*TODO: redirect to home if signed in*/
    render() {
        const {users} = this.props;
        return (
            <div>
                <p>Welcome! Please sign in to access Would You Rather App</p>
                <form>
                    <select name="users" id="users">
                        <option value="" disabled>Select user</option>
                        {Object.keys(users).map(id =>
                            <option key={id} value={id}>{users[id].name}</option>
                        )}
                    </select>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Signin)