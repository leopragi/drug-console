import React, {Component} from 'react';

import {TextInput, Card, Button} from '../components/FormComponents'

class Login extends Component {

    state = {
        email : '',
        password : ''
    }

    handleChange = (event) => {
        const target = event.target;
        this.setState({[target.name] : target.value});
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
                <Button>Login</Button>
            </Card>
        )
    }
}

export default Login;