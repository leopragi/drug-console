import React, { Component } from 'react'
import { Card, TextInput } from '../components/FormComponents';

class Create extends Component {
    render() {
        return (
            
                <Card title ='SIGNUP' >
                    <div>
                        <TextInput placeholder='Email' />
                        <TextInput placeholder='Password' />

                    </div>
                </Card>
        )
    }
}

export default Create;