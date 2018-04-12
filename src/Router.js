import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import {connect} from 'react-redux'
import UserCreate from './user/Create'
import {PublicRoute,PrivateRoute,LoginRoute} from './components/RouterComponents'

class AppRouter extends Component {
    render() {
        var isLoggedIn = this.props.isLoggedIn;
        isLoggedIn= !!this.props.user;
        return (
            <Router>
                <div>
                    <PrivateRoute path="/" component={Dashboard}
                        exact
                        isLoggedIn={isLoggedIn}
                        redirectTo="/user/login"
                    />
                   
                    <PrivateRoute
                        path="/dashboard"
                        component={Dashboard}
                        isLoggedIn={isLoggedIn}
                        redirectTo="/user/login"
                    />
                    <LoginRoute
                        path="/user/login"
                        component={UserLoginForm}
                        isLoggedIn={isLoggedIn}
                    />
                    <PublicRoute
                        path="/user/createUser"
                        component={UserCreateForm}
                        isLoggedIn={isLoggedIn}
                    />
                </div>
            </Router>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(AppRouter)