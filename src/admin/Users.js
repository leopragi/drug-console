import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from 'styled-components'
import {List as DefaultList, Tabs,} from 'antd'

import {adminReadNonendUsersStart, adminAuthorizeDician} from '../redux/actions/actionCreators'
import {Button} from '../components/FormComponents'

class Users extends Component {
  
    state = {
        selectedUid : '',
        authorize : false
    }

    constructor(props){
        super(props)
        props.adminReadNonendUsersStart();        
    }

    authorize = (id) => (event) => {
        this.props.adminAuthorizeDician(id);
    }

    render() {
        let {users} = this.props;
        let {unauthorized, byRole} = users;
        
        return(
            <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="To be authorized" key="1">

            <DefaultList
                itemLayout="horizontal"
                dataSource={unauthorized}
                renderItem={user => (
                    <DefaultList.Item 
                        actions={[<a onClick={this.authorize(user.id)}>Accept</a>, <a>Reject</a>]}>
                        <DefaultList.Item.Meta description={user.email}/>
                    </DefaultList.Item>
                )}
            />
            </Tabs.TabPane>

            {
                byRole && byRole.map((category, key) => {
                    return <Tabs.TabPane tab={category[0].role} key={key+2}>
                    <DefaultList
                        itemLayout="horizontal"
                        dataSource={category}
                        renderItem={user => (
                            <DefaultList.Item >
                                <DefaultList.Item.Meta
                                    description = {user.email }    
                                />
                            </DefaultList.Item>
                        )}
                        />
                    </Tabs.TabPane>        
                })   
            }
        </Tabs>   
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        users: state.admin.users,
    }
}


export default connect(mapStateToProps,{adminReadNonendUsersStart, adminAuthorizeDician})(Users);