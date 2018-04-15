import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from 'styled-components'
import {List as DefaultList, Tabs, Input} from 'antd'
import _ from 'lodash'

import {searchByText} from '../utils'
import {adminReadNonendUsersStart, adminAuthorizeDician} from '../redux/actions/actionCreators'
import {Button} from '../components/FormComponents'
const {Search} = Input;

class Users extends Component {
  
    constructor(props){
        super(props)
        props.adminReadNonendUsersStart();     
        this.state = {
            searchedUsers : []
        }
    }

    authorize = (id) => (event) => {
        this.props.adminAuthorizeDician(id);
    }

    searchUsers = (text) => {
        if(!text){
            this.setState({searchedUsers : []});
        }
        this.setState( 
            { searchedUsers : searchByText(this.props.users, text, 
                ['id', 'fcmToken', 'gender', 'completeProfile', 'authorized'])
            }
        );
    }

    render() {
        let {users} = this.props;
        var partitionAuthorized = _.partition(users, 'authorized');
        var byRole = _.values(_.groupBy(partitionAuthorized[0], 'role'));
        var unauthorized = partitionAuthorized[1];
        return(
            <div>
                <Search
                    placeholder="Search"
                    onSearch={this.searchUsers}
                    style={{ width: 200 }}
                    />
            { this.state.searchedUsers.length == 0 ? <Tabs defaultActiveKey="1">
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
            </Tabs> : <DefaultList
                        itemLayout="horizontal"
                        dataSource={this.state.searchedUsers}
                        renderItem={user => (
                            <DefaultList.Item >
                                <DefaultList.Item.Meta
                                    description = {user.email }    
                                />
                            </DefaultList.Item>
                        )}
                        />
                    }   
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        users: state.admin.users,
    }
}


export default connect(mapStateToProps,{adminReadNonendUsersStart, adminAuthorizeDician})(Users);