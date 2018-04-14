import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from 'styled-components'
import {List as DefaultList} from 'antd'

import { adminReadAllUserStart } from '../redux/actions/actionCreators'

class Users extends Component {
  
    state = {
        selectedUid : '',
        authorize : false
    }

    constructor(props){
        super(props)
        props.adminReadAllUserStart();        
    }

    render() {
        let {users} = this.props;
        return(
            <DefaultList
                itemLayout="horizontal"
                dataSource={users}
                renderItem={user => (
                    <DefaultList.Item>
                        <DefaultList.Item.Meta
                            description = {user.email}    
                        />
                    </DefaultList.Item>
                )}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.admin.users
    }
}


export default connect(mapStateToProps,{adminReadAllUserStart})(Users);