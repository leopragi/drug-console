import React, {Component} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'

import {Input, Card, Button} from '../components/FormComponents'
import {userLoginStart} from '../redux/actions/actionCreators'


const FieldContainer = styled.div`
`;

const RecoverPasswordContainer = styled.div`
    padding: 5px;
`;


const TitleContainer = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

const LoginFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

class Login extends Component {

    state = {
        email : '',
        password : '',
        progress : false
    }

    handleChange = (event) => {
        const target = event.target;
        this.setState({[target.name] : target.value});
    }

    handleLogin = (event) => {
        this.setState({progress : true});
        this.props.userLoginStart(this.state)
    }
    
    render(){
        return(
            <Card>
                <TitleContainer>
                    Login
                </TitleContainer>
                <FieldContainer>
                    <Input 
                        name="email"
                        size="large"
                        type="email"
                        placeholder="Email"
                        disabled={this.state.progress}
                        value={this.state.email}
                        onChange={this.handleChange}   
                    />
                    <Input 
                        name="password"
                        size="large"
                        type="password"
                        placeholder="Password"
                        disabled={this.state.progress}
                        value={this.state.password}
                        onChange={this.handleChange}                    
                    />
                </FieldContainer>
                <LoginFooter>
                    <RecoverPasswordContainer>
                        Forgot password?
                    </RecoverPasswordContainer>
                    <Button
                        loading={this.state.progress}
                        type="primary"
                        size="large"
                        onClick={this.handleLogin}>
                        Login
                    </Button>
                </LoginFooter>
            </Card>
        )
    }
}

export default connect(null, {userLoginStart})(Login);