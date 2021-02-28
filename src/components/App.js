import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {handleInitialData} from "../actions/shared";
import Questions from "./Questions";
import Header from "./Header";
import QuestionPage from "./QuestionPage";
import Signin from "./Signin";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <Header/>
                {/*TODO: prevent from accessing if not signed*/}
                {this.props.authRequired ?
                    <Redirect to='/sign-in' />
                    : ''
                }
                <main>
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path='/' exact component={Questions}/>
                            <Route path='/questions/:id' component={QuestionPage}/>
                            <Route path='/sign-in' component={Signin}/>
                        </div>
                    }
                </main>
            </Router>
        )
    };
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null,
        authRequired: !authedUser,
    }
}

export default connect(mapStateToProps)(App) 
