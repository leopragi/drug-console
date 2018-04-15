import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from 'styled-components'
import {List as DefaultList, Tabs,} from 'antd'

import { adminReadAllUserStart, adminReadUnauthorizedUsersStart, adminReadAuthorizedUsersStart } from '../redux/actions/actionCreators'

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
        console.log(users)
        return(
            <Tabs defaultActiveKey="2">
            <Tabs.TabPane tab={<span>UNAUTHORIZED USERS</span>} key="1">
              
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span>AUTHORIZED USERS</span>} key="2">

            </Tabs.TabPane>
          </Tabs>
            
            // <DefaultList
            //     itemLayout="horizontal"
            //     dataSource={users}
            //     renderItem={user => (
            //         <DefaultList.Item>
            //             <DefaultList.Item.Meta
            //                 description = {user.email}    
            //             />
            //         </DefaultList.Item>
            //     )}
            // />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.admin.users
    }
}


export default connect(mapStateToProps,{adminReadAllUserStart, adminReadUnauthorizedUsersStart, adminReadAuthorizedUsersStart})(Users);