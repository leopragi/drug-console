import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from 'styled-components'
import {List as DefaultList, Tabs,} from 'antd'


import { adminReadAllUserStart, adminReadNonendUsersStart} from '../redux/actions/actionCreators'

class Users extends Component {
  
    state = {
        selectedUid : '',
        authorize : false
    }

    constructor(props){
        super(props)
       // props.adminReadAllUserStart();
        props.adminReadNonendUsersStart();        
    }

    render() {
        let {users} = this.props;
        
        return(
            <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab={<span>UNAUTHORIZED USERS</span>} key="1">
            <DefaultList
                itemLayout="horizontal"
                dataSource={users}
                renderItem={user => (
                   // user.authorized === true ?
                   
                    <DefaultList.Item >
                        <DefaultList.Item.Meta
                            description = { user.authorized ? null : user.email}    
                        />
                    </DefaultList.Item>//: null
                )}
            />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span>AUTHORIZED USERS</span>} key="2">
            <DefaultList
                itemLayout="horizontal"
                dataSource={users}
                renderItem={user => (
                    user.authorized ?
                   
                    <DefaultList.Item >
                        <DefaultList.Item.Meta
                            description = {user.email }    
                        />
                    </DefaultList.Item>: null
                )}
                />
            </Tabs.TabPane>
          </Tabs>
            
           
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.admin.users
    }
}


export default connect(mapStateToProps,{adminReadAllUserStart, adminReadNonendUsersStart})(Users);