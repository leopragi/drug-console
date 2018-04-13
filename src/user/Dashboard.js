import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styled from 'styled-components';

import {Button} from '../components/FormComponents'
import {userSignOut} from '../redux/actions/actionCreators'
import Create from './Create';
import { PrivateRouteWrapper, Link } from '../components/RouteComponents';

const DefaultHeader = Layout.Header;
const DefaultContent = Layout.Content;
const DefaultFooter = Layout.Footer; 
const DefaultSider = Layout.Sider;
const SubMenu = Menu.SubMenu;

const Header = styled(DefaultHeader)`
    background: #fff;
    padding: 0;
`;

const Content = styled(DefaultContent)`
    margin: 0 16px
`;

const Footer = styled(DefaultFooter)`
    text-align: center
`;

class Dashboard extends Component {
    state = {
        collapsed: false,
    };
    
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    handleSignout = () => {
        this.props.userSignOut();
    }

    render() {
        let {user} = this.props;
		var isLoggedIn = !!user; 
		let PrivateRoute = PrivateRouteWrapper(isLoggedIn);
        return (
            <Layout style={{ minHeight: '100vh'}}>
                <DefaultSider 
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                <div className="logo" >
                </div>
                <Menu  theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>User</span></span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </DefaultSider>
            <Layout>
                <Header>
                    <Button 
                        onClick={this.handleSignout}
                    >Sign out</Button>
                </Header>
                <Content>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <PrivateRoute redirectTo='/login' path="/dashboard/signup" component={Create}/>
                    </div>
                </Content>
                <Footer>
                </Footer>
            </Layout>
        </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        user: state.user
    }
}

export default connect(mapStateToProps, {userSignOut})(Dashboard);