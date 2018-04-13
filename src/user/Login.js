import React, {Component} from 'react';
import {connect} from 'react-redux'

import {TextInput, Card, Button} from '../components/FormComponents'
import {userLoginStart} from '../redux/actions/actionCreators'

class Login extends Component {

    state = {
        email : '',
        password : ''
    }

    handleChange = (event) => {
        const target = event.target;
        this.setState({[target.name] : target.value});
    }

    handleLogin = (event) => {
        this.props.userLoginStart(this.state)
    }
    
    render(){
        return(
            <Card>
                <TextInput 
                    name="email"
                    size="large"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}   
                />
                <TextInput 
                    name="password"
                    size="large"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}                    
                />
                <Button
                    size="large"
                    onClick={this.handleLogin}>
                    Login
                </Button>
            </Card>
        )
    }
}

export default connect(null, {userLoginStart})(Login);