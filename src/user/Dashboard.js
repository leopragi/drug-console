import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styled from 'styled-components';

import {Button} from '../components/FormComponents'
import {userSignOut} from '../redux/actions/actionCreators'
import Create from './Create';
import { PrivateRouteWrapper, Link as DefaultLink } from '../components/RouteComponents';

import Users from '../admin/Users';
import Notification from '../admin/Notification';
import Template from '../admin/Template';
import Queries from '../dician/Queries'
import Query from '../dician/Query';
import Teams from '../admin/Teams';

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

const Link = styled(DefaultLink)`
    color : white;
`;

const HeaderButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
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
                        <Link to="/dashboard/queries">
                            <Icon type="pie-chart" />
                            <span>Queries</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/users">
                            <Icon type="desktop" />
                            <span>Users</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="3"
                        title={<span><Icon type="customer-service" /><span>Service</span></span>}
                    >
                        <Menu.Item key="3.1">
                            <Link to="/admin/template">Template</Link>
                        </Menu.Item>
                        <Menu.Item key="3.2">
                            <Link to="/admin/notification">Notification</Link>
                        </Menu.Item>
                    </SubMenu> 
                    <Menu.Item key="4">
                        <Link to="/admin/teams">
                            <Icon type="team" />
                            <span>Teams</span>
                        </Link>
                    </Menu.Item>
                    {/*<Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item> */}
                </Menu>
            </DefaultSider>
            <Layout>
                <Header>
                    <HeaderButtonContainer>
                        <Button 
                            onClick={this.handleSignout}>
                            Sign out
                        </Button>
                    </HeaderButtonContainer>
                </Header>
                <Content>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <PrivateRoute redirectTo='/login' path="/dashboard/signup" component={Create}/>
                        <PrivateRoute redirectTo='/login' path="/dashboard/queries" component={Queries}/>
                        <PrivateRoute redirectTo='/login' path="/dashboard/query/:id" component={Query}/>
                        <PrivateRoute redirectTo='/login' path="/admin/users" component={Users}/>
                        <PrivateRoute redirectTo='/login' path="/admin/notification" component={Notification}/>
                        <PrivateRoute redirectTo='/login' path="/admin/template" component={Template}/>
                        <PrivateRoute redirectTo='/login' path="/admin/teams" component={Teams}/>
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
        user: state.user,
    }
}

export default connect(mapStateToProps, {userSignOut})(Dashboard);
