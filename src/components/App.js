import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {handleInitialData} from "../actions/shared";
import Questions from "./Questions";
import Header from "./Header";
import QuestionPage from "./QuestionPage";
import Login from "./Login";
import ProtectedRoute from "./Auth/ProtectedRoute";
import NotFound from "./NotFound";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {loading} = this.props
        return (
            <Router>
                <div className="container-main">
                    {loading ? <p>Loading...</p> : (
                        <Fragment>
                            <Header/>
                            <main>
                                <Switch>
                                    <ProtectedRoute exact path='/' component={Questions}/>
                                    <ProtectedRoute path='/questions/:id' component={QuestionPage}/>
                                    <ProtectedRoute path='/add' component={NewQuestion}/>
                                    <ProtectedRoute path='/leaderboard' component={Leaderboard}/>
                                    <Route path='/login' component={Login}/>
                                    <ProtectedRoute path="*" component={NotFound}/>
                                </Switch>
                            </main>
                        </Fragment>
                    )}
                </div>
            </Router>
        )
    };
}

function mapStateToProps({loading}) {
    return {
        loading
    }
}

export default connect(mapStateToProps)(App) 
