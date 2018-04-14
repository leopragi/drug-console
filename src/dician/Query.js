import React, { Component } from 'react'
import Editor from 'tinymce-react';
import {Card} from '../components/FormComponents'
import {Tag, Icon} from 'antd'
import style from 'styled-components'
    
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

    render() {
        let {query} = this.props.location.state
        return(
            <QueryContainer>  
                <TitleContainer>
                    {query.queries[0].query} 
                </TitleContainer>
               <TagContainer>
                        <Tag color='#ffab00'> <Icon type="smile" /> {query.feedback}</Tag>
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
            </QueryContainer>
        )
    }
}

export default Query;