import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from 'styled-components'
import {List as DefaultList, Tabs,} from 'antd'


import {adminReadNonendUsersStart} from '../redux/actions/actionCreators'

class Users extends Component {
  
    state = {
        selectedUid : '',
        authorize : false
    }

    constructor(props){
        super(props)
        props.adminReadNonendUsersStart();        
    }

    render() {
        let {authorizedUsers,unauthorizedUsers} = this.props;
          
        
        return(
            <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab={<span>UNAUTHORIZED USERS</span>} key="1">
            <DefaultList
                itemLayout="horizontal"
                dataSource={unauthorizedUsers}
                renderItem={user => (
                   
                   
                    <DefaultList.Item >
                        <DefaultList.Item.Meta
                            description = { user.email}    
                        />
                    </DefaultList.Item>
                )}
            />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span>AUTHORIZED USERS</span>} key="2">
            <DefaultList
                itemLayout="horizontal"
                dataSource={authorizedUsers}
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
        authorizedUsers: state.admin.users.authorizedUsers,
        unauthorizedUsers: state.admin.users.unauthorizedUsers
    }
}


export default connect(mapStateToProps,{adminReadNonendUsersStart})(Users);