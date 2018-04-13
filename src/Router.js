import React, { Component } from 'react';
import {connect} from 'react-redux'

import UserCreate from './user/Create'
import {PrivateRouteWrapper, PublicRoute, Link, Router, Switch} from './components/RouteComponents';
import CreateUser from './user/Create'
import Auth from './user/Auth'
import Dashboard from './user/Dashboard'
import { userSendVerificationMailStart } from './redux/actions/actionCreators';

class AppRouter extends Component {
    render() {
		var isLoggedIn = this.props.isLoggedIn;
        isLoggedIn= !!this.props.user;
		let PrivateRoute = PrivateRouteWrapper(isLoggedIn);

        return (
            <Router>
				<div>
					{/* <Link to="/login">Login</Link>
					<Link to="/user/create">Create User</Link>
					<Link to="/dashboard">Dashboard</Link> */}
					<Switch>
						<PrivateRoute redirectTo="/login" path="/dashboard" component={Auth}/>
						<PrivateRoute redirectTo="/dashboard" path="/login" isLoggedIn={!isLoggedIn} component={Auth}/>					
					</Switch>
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

export default connect(mapStateToProps,{userSendVerificationMailStart})(AppRouter)