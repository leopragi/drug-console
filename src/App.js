import React, { Component } from 'react';

import {PrivateRouteWrapper, PublicRoute, Link, Router} from './components/RouteComponents';
import CreateUser from './user/Create'
import Login from './user/Login'
import Dashboard from './user/Dashboard'
import { Button } from 'antd';


class App extends Component {
	render() {
		var isLoggedIn = false;
		let PrivateRoute = PrivateRouteWrapper(isLoggedIn);
		return (
			<Router>
				<div>
					<Button type="primary">Button</Button>
					<Link to="/login">Login</Link>
					<Link to="/user/create">Create User</Link>
					<Link to="/dashboard">Dashboard</Link>
					<PublicRoute path="/user/create" component={CreateUser}/>
					<PrivateRoute redirectTo="/login" path="/dashboard" component={Dashboard}/>
					<PrivateRoute path="/login" isLoggedIn={!isLoggedIn} component={Login}/>					
				</div>
			</Router>
		);
	}
}

export default App;
