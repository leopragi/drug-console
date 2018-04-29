import React, { Component } from 'react'
import {Card, Row, Col, Form, Button} from 'antd'
import {Input} from '../components/FormComponents'

class Teams extends Component {
    render() {

        const domainId = "ooty";
        return (
            <Row>
                <Col span={6}>
                    <Card title="Create Team"
                        style={{ width: 300 }}>
                        <Form>
                        <Input placeholder="Team name"/> 
                            <Input addonBefore={`${domainId}.`} addonAfter=".team" placeholder="Team Id"/> 
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

export default Teams;