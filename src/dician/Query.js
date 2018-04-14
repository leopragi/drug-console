import React, { Component } from 'react'
import Editor from 'tinymce-react';

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
        return(
            <Editor 
                apiKey="zuyjyxrgwf0wxyuv9mh90ew3aj0v6dpgg3uerlc2q9hrsaus"
                initialValue={this.state.answer}
                init={{
                    plugins: 'link image code table',
                    toolbar: 'undo redo | table | bold italic | alignleft aligncenter alignright | code'
                }}
                onChange={this.handleEditorChange}
            />
        )
    }
}

export default Query;