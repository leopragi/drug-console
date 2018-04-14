import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List as DefaultList} from 'antd'

import {Button, Card} from '../components/FormComponents'
import {userReadQueriesStart} from '../redux/actions/actionCreators'

class Queries extends Component {

    constructor(props){
        super(props)
        props.userReadQueriesStart(props.uid)
    }


    render() {
        let {queries} = this.props;
        return(
            <DefaultList
                itemLayout="horizontal"
                dataSource={queries}
                renderItem={query => (
                    <DefaultList.Item>
                        <DefaultList.Item.Meta
                            description = {query.queries[0].queryString}    
                        />
                    </DefaultList.Item>
                )}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        queries : state.queries
    }
}

export default connect(mapStateToProps, {userReadQueriesStart})(Queries);
