import React, { Component } from 'react'
import Editor from 'tinymce-react';
import {connect} from 'react-redux'
import {Card, Button} from '../components/FormComponents'
import {Tag, Icon, Alert} from 'antd'
import style from 'styled-components'

import {userRequestEditQuery} from '../redux/actions/actionCreators'
    
const TagContainer = style.div`
    display : flex;
    align-items : center;
    padding : 8px;
`;

const TitleContainer = style.div`
    display : flex;
    align-items : center;
    font-size : 35px;
    font-weight: bold;
`;

const ActionContainer = style.div`
    display : flex;
    justify-content: flex-end;
`;

const EditorContainer = style.div``;
const QueryContainer = style.div``;

class Query extends Component {

    constructor(props){
        super(props)
        let {query} = this.props.location.state;
        this.state = {
            answer : query.answer
        }        
    }    

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    handleEditRequest = (query) => (event) => {
       this.props.userRequestEditQuery({query})
        return (
            <div>
                <Alert
                    message="Requested to Edit"
                    description="Your request to edit the query is under process."
                    type="success"
                    showIcon
                    />
                </div>
        )      
    }
    render() {
        let {query} = this.props.location.state
        return(
            <QueryContainer>  
                <TitleContainer>
                    {query.queries[0].query} 
                </TitleContainer>
               <TagContainer>
                        <Tag color='#ffab00'> <Icon type="smile" /> {query.feedback.comment}</Tag>
                        <Tag color='#ffab00'>{'@'+query.at}</Tag>
                        {query.answered ? <Tag color='#87d068'>resolved</Tag> : <Tag color='#f00'>pending</Tag>  }

                </TagContainer>
                <EditorContainer>
                    <Editor
                        apiKey="zuyjyxrgwf0wxyuv9mh90ew3aj0v6dpgg3uerlc2q9hrsaus"
                        initialValue={this.state.answer}
                        init={{
                            plugins: 'link image code table',
                            toolbar: 'undo redo | table | bold italic | alignleft aligncenter alignright | code'
                        }}
                        onChange={this.handleEditorChange}
                    />
                </EditorContainer>
                <ActionContainer>
                    <Button
                        type = 'primary'
                        onClick={this.handleEditRequest(query)}>Request Edit</Button>
                </ActionContainer>
            </QueryContainer>
        )
    }
}
export default connect (null,{userRequestEditQuery})(Query);