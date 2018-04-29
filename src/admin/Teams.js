import React, { Component } from 'react'
import {Card, Row, Col, Form, Button} from 'antd'
import {Input, Select} from '../components/FormComponents'

class Teams extends Component {
    render() {
        const domainId = "ooty";

        const options = [
            {value:'red', name:'Red', key:'1'},
            {value:'green', name:'Green', key:'2'},
            {value:'blue', name:'Blue', key:'3'},
            {value:'blue1', name:'Blue', key:'4'},
            {value:'blue2', name:'Blue', key:'5'},
            {value:'blue3', name:'Blue', key:'6'},
            {value:'blue4', name:'Blue', key:'7'},
            {value:'blue5', name:'Blue', key:'8'},
        ];

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
                                options={options}
                            />
                            <Select 
                                mode="multiple" 
                                placeholder="Executive"
                                options={options}
                            />
                            <Select 
                                mode="multiple" 
                                placeholder="Expert"
                                options={options}
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

export default Teams;