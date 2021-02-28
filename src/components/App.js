import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {handleInitialData} from "../actions/shared";
import Questions from "./Questions";
import Header from "./Header";
import QuestionPage from "./QuestionPage";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path='/' exact component={Questions}/>
                            <Route path='/questions/:id' component={QuestionPage}/>
                        </div>
                    }
                </main>
            </Router>
        )
    };
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App) 
