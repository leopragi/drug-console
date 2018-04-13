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
        current : 0
    }

    constructor(){
        super();
        this.steps = steps({
            email : this.state.email, 
            password : this.state.password, 
            handleChange : this.handleChange,
        });
    }

    next = () => {
        console.log(this.state.current),
        this.setState({ current : this.state.current + 1 });
    }
    
    prev = () => {
        this.setState({ current : this.state.current - 1 });
    }

    handleChange = (event) => {
        let target = event.target;
        this.setState({ [target.name] : target.value });
    }

    render() {
        return (
            <Card>
                <Steps current={this.state.current}>
                    {this.steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{this.steps[this.state.current].content}</div>
                <div className="steps-action">
                {
                    this.state.current < this.steps.length - 1
                    &&
                    <Button type="primary" onClick={this.next}>Next</Button>
                }
                {
                    this.state.current === this.steps.length - 1
                    &&
                    <Button type="primary" onClick={() => {}}>Done</Button>
                }
                {
                    this.state.current > 0
                    &&
                    <Button style={{ marginLeft: 8 }} onClick={this.prev}>
                    Previous
                    </Button>
                }
                </div>
            </Card>
            
        )
    }
}

export default Create;