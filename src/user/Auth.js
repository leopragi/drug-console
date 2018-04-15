import React, { Component } from 'react'
import styled from 'styled-components'
import { Tabs, Radio } from 'antd';
import {connect} from 'react-redux'

import Login from './Login';
import Create from './Create';
import {PrivateRouteWrapper, PublicRoute} from '../components/RouteComponents';

const { TabPane } = Tabs;


const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const LeftContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    background-color:black;
`;

const RightContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex : 5;
`;

const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 50px;
`;

const AppName = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 50px;
    font-weight: bold;
    font-spacing: 1px;
`;

class Auth extends Component {

    render() {
        let {user} = this.props;
        var isLoggedIn = !!user;
        let PrivateRoute = PrivateRouteWrapper(isLoggedIn);
        var redirectTo = '/dashboard';
		if(user){
			redirectTo = '/admin/users'
        }
        return (
            <Container>
                <LeftContainer>
                    <AppName>Med Q</AppName>
                </LeftContainer> 
                <RightContainer>
                    <AuthContainer>
                        <PrivateRoute redirectTo={redirectTo} path="/login" isLoggedIn={!isLoggedIn} component={Login}/>
                        <PrivateRoute redirectTo={redirectTo} path="/signup" isLoggedIn={!isLoggedIn} component={Create}/>
                    </AuthContainer>
                </RightContainer>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(Auth)