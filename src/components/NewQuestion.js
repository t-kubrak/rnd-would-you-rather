import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleQuestionCreate} from "../actions/shared";
import {Redirect} from "react-router-dom";

class NewQuestion extends Component {
    state = {
        optionOne: null,
        optionTwo: null,
        toHome: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch, authedUser} = this.props
        dispatch(handleQuestionCreate(this.state.optionOne, this.state.optionTwo, authedUser))
            .then(
                this.setState(() => ({
                    toHome: true,
                }))
            )
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <p>Would you rather:</p>
                <input type="text" name='optionOne' placeholder='Option 1' onChange={this.handleChange} required/>
                <p>Or</p>
                <input type="text" name='optionTwo' placeholder='Option 2' onChange={this.handleChange} required/>
                <br/>
                <br/>
                <input type="submit" value='Submit'/>
            </form>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {authedUser}
}

export default connect(mapStateToProps)(NewQuestion)