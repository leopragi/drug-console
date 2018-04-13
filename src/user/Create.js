import React, { Component } from 'react'
import { Card, TextInput, Button } from '../components/FormComponents';
import {userSignUpStart} from '../redux/actions/actionCreators'
import {connect} from 'react-redux'

export class Create extends Component {
  
    state = {
        email : '',
        password :'',
    }

    handleChange = (event) => {
        let target = event.target;
        this.setState({ [target.name] : target.value });
    }

    handleSignUp = (event) => {
        this.props.userSignUpStart(this.state)
    }

    render() {
        return (
            <Card>
                <TextInput
                    name='email'
                    size='large'
                    type="email"                    
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <TextInput
                    name='password'
                    size='large'
                    placeholder='Password'
                    type="password"                    
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <Button 
                    onClick={this.handleSignUp} >
                    Sign up
                </Button>

            </Card>
            
        )
    }
}

export default connect(null,{userSignUpStart})(Create);