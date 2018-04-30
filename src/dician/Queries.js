import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List as DefaultList, Spin, Icon, Text, Badge, Popover, List, Tag, Tabs } from 'antd'
import {Button, Modal} from '../components/FormComponents'
import {Link} from '../components/RouteComponents'
import moment from 'moment'
import {userReadQueriesStart, userReadSubordinatesStart, allocateQuery, adminRequestEditQuery} from '../redux/actions/actionCreators'
import {Chart, Axis, Tooltip, Geom} from "bizcharts";


  
import _ from 'lodash'

class Queries extends Component {

    state = {
        subordinate: undefined,
        query : undefined
    }

    constructor(props){
        super(props)
        props.userReadQueriesStart()
        props.userReadSubordinatesStart()
    }

    getActions(query){
        const actions = [];
        const IconText = ({text}) => (
            <span>
              <Icon style={{ marginRight: 8 }} />
              {text}
            </span>
        );

        if(query.feedback){
            if(query.feedback.rating){
                actions.push(<IconText text = {query.feedback.rating + '/5'} />);
            }
            if(query.feedback.comment){
                actions.push(<IconText text = {query.feedback.comment} />);
            }
        }
        return actions;
    }


    handleAllocate = (event) => {        
        this.props.allocateQuery(this.state)
    }
        
    selectSubordinate = (query, subordinate) => (event) => {
        this.setState({
            query: query,
            subordinate : subordinate,
        })
    }

    authorizeSuggestEdit = (query, authorized) =>(event) => {
        this.props.adminRequestEditQuery(query, authorized);
    }

   AllocateDialog(query, subordinates) { 
        return(
            <Modal 
                title="Allocate" 
                buttonText="Allocate"
                handleOk={this.handleAllocate}
                handleCancel={() => {}}>
                    <List
                        size="small"
                        bordered
                        dataSource={subordinates}
                        renderItem={(subordinate) => (<List.Item><a onClick = {this.selectSubordinate(query, subordinate)}>{subordinate.email}</a></List.Item>)}
                    />
            </Modal>
        );
    }

    render() {
        let {queries, subordinates} = this.props;
        let date = moment(queries.dueOn).format('DD MMM YYYY')
        queries = _.partition(queries, n => n.suggestEdit)
        data = {}
        return(
            <div>
            <Chart height={400} data={data} forceFit>
                <Axis name="month" />
                <Axis name="temperature" label={{formatter: val => `${val}°C`}} />
                    <Tooltip crosshairs={{type : "y"}} />
                <Geom type="line" position="month*temperature" size={2} color={'city'} />
                <Geom type='point' position="month*temperature" size={4} color={'city'} />
            </Chart>
            <Tabs defaultActiveKey = '1'>
            <Tabs.TabPane tab='All Queries' key='1'>
                <DefaultList
                    itemLayout="vertical"
                    dataSource={queries[1]}
                    renderItem={query => (
                        <DefaultList.Item
                            actions={this.getActions(query)}
                            extra={
                                <div>
                                    <Badge status="processing" />
                                    {date}
                                    <div>
                                        {this.AllocateDialog(query, subordinates)}
                                    </div>
                                </div>
                                    
                            }>
                            <DefaultList.Item.Meta style={{marginBottom : '5px'}}
                                description={<Tag color="#ffab00">{'@'+query.at}</Tag>}
                        />
                            <DefaultList.Item.Meta style={{margin : '0px'}}
                                title={
                                    <Link to={{
                                        pathname : "/dashboard/query/"+query.id,
                                        state : { query }
                                    }}>{query.queries[0].query}</Link>
                                }
                        />
                        </DefaultList.Item>
                        
                    )}
                />
                </Tabs.TabPane>
                <Tabs.TabPane tab = 'Edit Requests' key = '2'>
                <DefaultList
                    itemLayout="vertical"
                    dataSource={queries[0]}
                    renderItem={query =>  (
                       <div>
                            <DefaultList.Item                            
                                actions={[<a onClick={this.authorizeSuggestEdit(query, true)}>Accept</a>,
                                <a onClick={this.authorizeSuggestEdit(query, false)}>Reject</a>]}>
                                <DefaultList.Item.Meta style={{margin : '0px'}}
                                    title={
                                        <Link to={{
                                            pathname : "/dashboard/query/"+query.id,
                                            state : { query }
                                        }}>{query.queries[0].query}</Link>
                                    } 
                                /> 
                           </DefaultList.Item>
                        </div>
                        
                    )}
                />
                
                </Tabs.TabPane>
                </Tabs>
                </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        queries : state.dician.queries,
        subordinates : state.dician.subordinates,
        user : state.user
    }
}

export default connect(mapStateToProps, {userReadQueriesStart, userReadSubordinatesStart, allocateQuery, adminRequestEditQuery})(Queries);
