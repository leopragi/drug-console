import React, { Component } from 'react'


class Query extends Component {

    render() {
        let {query} = this.props.location.state;
        console.log(query)
        return(
            <div>Query</div>
        )
    }
}

export default Query;