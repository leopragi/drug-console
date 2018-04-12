import React from "react";
import { Route as PublicRoute, Redirect, Link, BrowserRouter as Router, Switch} from "react-router-dom";

const PrivateRoute = ({
	redirectTo, // Redirect to this route if not logged in
	component: Component,
	isLoggedIn,
	...rest
	}) => {
		return <PublicRoute
		{...rest}
		render={props => {
			return isLoggedIn ?
				<Component {...props} isLoggedIn/> : 
				<Redirect
					to={{
						pathname: redirectTo
						? redirectTo
						: props.location.state ? props.location.state.from.pathname : "/",
						state: { from: props.location }
					}}
				/>
			}}
		/>
	};

function PrivateRouteWrapper(isLoggedIn) {
	return (props) => {
		return PrivateRoute({isLoggedIn, ...props});
	}
}

export  {PrivateRouteWrapper, PublicRoute, Link, Router, Switch};