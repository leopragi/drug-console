import React, { Component } from 'react'
import { Card, TextInput, Button } from '../components/FormComponents';
import { Steps } from 'antd';

const Step = Steps.Step;

function Step1(props){
    let {email, password, handleChange} = props;
    return (
        <div>
            <TextInput
                name='email'
                size='large'
                type="email"                    
                placeholder='Email'
                value={email}
                onChange={handleChange}
            />
            <TextInput
                name='password'
                size='large'
                placeholder='Password'
                type="password"                    
                value={password}
                onChange={handleChange}
            />
        </div>
    )
}

function steps(props){ 
    return [{
        title: 'Create account',
        content: <Step1 {...props}/>,
    }, {
        title: 'Verify email',
        content: 'Second-content',
    }, {
        title: 'Please wait',
        content: 'Last-content',
    }];
}

export class Create extends Component {
  
    state = {
        email : '',
        password :'',
    }

    constructor(){
        super();
        this.steps = steps({
            email : this.state.email, 
            password : this.state.password, 
            handleChange : this.handleChange
        });
    }

    handleChange = (event) => {
        let target = event.target;
        this.setState({ [target.name] : target.value });
    }

    render() {
        return (
            <Card>
                <Steps current={0}>
                    {this.steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{this.steps[0].content}</div>
            </Card>
            
        )
    }
}

export default Create;