import React, { Component } from 'react'
import { Card, TextInput, Button } from '../components/FormComponents';
import {userSignUpStart} from '../redux/actions/actionCreators'
import {connect} from 'react-redux'
import { Steps } from 'antd';
import style from 'styled-components'

const Step = Steps.Step;

const ActionsContainer = style.div`
    display : flex;
    justify-content: space-between;
`;

const StepsContainer = style.div`
    margin : 5px;
`;

const ContentContainer = style.div`
    margin : 10px;
`;

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

export class Create extends Component {
  
    state = {
        email :'',
        password : '',
        current : 0
    }

    componentWillReceiveProps(newProps){
        let {user} = newProps;
        if(user){
            this.setState({
                email : user.email,
                password : '*******',
                current : user.emailVerified ? 2 : 1
            })
        }
    }

    constructor(props){
        super(props)
        let {user} = props;
        if(user){
            this.state = {
                email : user.email,
                password : '*******',
                current : user.emailVerified ? 2 : 1
            }
        }
    }

    next = () => {
        switch(this.state.current){
            case 0:
            this.props.userSignUpStart(this.state)
            break;

        }
        this.setState({ current : this.state.current + 1 });
    }
    
    prev = () => {
        this.setState({ current : this.state.current - 1 });
    }

    steps(props){ 
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

    handleChange = (event) => {
        let target = event.target;
        this.setState({ [target.name] : target.value });
    }

    render() {
        const steps = this.steps({
            email : this.state.email, 
            password : this.state.password, 
            handleChange : this.handleChange,
        })
        return (
            <Card>
                <StepsContainer>
                    <Steps current={this.state.current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                </StepsContainer>
                <ContentContainer className="steps-content">{steps[this.state.current].content}</ContentContainer>
                <ActionsContainer className="steps-action">
                {
                    this.state.current > 0
                    &&
                    <Button style={{ marginLeft: 8 }} onClick={this.prev}>
                    Previous
                    </Button>
                }
                {
                    this.state.current < steps.length - 1
                    &&
                    <Button type="primary" onClick={this.next}>Next</Button>
                }
                {
                    this.state.current === steps.length - 1
                    &&
                    <Button type="primary" onClick={() => {}}>Done</Button>
                }
                
                </ActionsContainer>
            </Card>
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps,{userSignUpStart})(Create);