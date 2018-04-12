import React, { Component } from 'react'
import styled from 'styled-components'
import { Tabs, Radio } from 'antd';

import UserLogin from './Login';
import UserCreate from './Create';

const { TabPane } = Tabs;


const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const LeftContainer = styled.div`
    flex: 1;
    background-color:black;
`;

const RightContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex : 1;
`;

class Auth extends Component {

    render() {
        return (
            <Container>
                <LeftContainer>
                </LeftContainer>                
                <RightContainer>
                    <Tabs defaultActiveKey="1" size="large">
                        <TabPane tab="Login" key="1">
                            <UserLogin />
                        </TabPane>
                        <TabPane tab="Sign Up" key="2">
                            <UserCreate />
                        </TabPane>
                    </Tabs>
                </RightContainer>
            </Container>
        )
    }
}

export default Auth;