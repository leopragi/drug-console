import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Card, Row, Col, Form, Button} from 'antd'
import _ from 'lodash'
import {adminReadNonendUsersStart} from '../redux/actions/actionCreators'
import {Input, Select} from '../components/FormComponents'

class Teams extends Component {

    constructor(props){
        super(props)
        props.adminReadNonendUsersStart();             
    }

    render() {
        let {users} = this.props;
        const domainId = "ooty";

        var freeDicians = _.filter(users, user => user.role == null);

        return (
            <Row>
                <Col span={6}>
                    <Card title="Create Team"
                        style={{ width: 300 }}>
                        <Form>
                            <Input placeholder="Team name"/> 
                            <Input addonBefore={`${domainId}.`} addonAfter=".team" placeholder="Team Id"/> 
                            <Select 
                                mode="multiple" 
                                placeholder="Preceptor"
                                options={freeDicians}
                                renderRow={(option, i)=>{
                                    return <div>
                                    <div>{option.email}</div>
                                    <div>{i}</div>
                                    </div>
                                }}
                            />
                            <Select 
                                mode="multiple" 
                                placeholder="Executive"
                                options={freeDicians}
                                renderRow={(option, i)=>{
                                    return <span>{option.email}</span>
                                }}
                            />
                            <Select 
                                mode="multiple" 
                                placeholder="Expert"
                                options={freeDicians}
                                renderRow={(option, i)=>{
                                    return <span>{option.email}</span>
                                }}
                            />
                            <Button type="primary" htmlType="submit">
                                Create
                            </Button>
                        </Form>
                   </Card>
                </Col>
                <Col span={18}>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.admin.users,
    }
}

export default connect(mapStateToProps,{adminReadNonendUsersStart})(Teams);