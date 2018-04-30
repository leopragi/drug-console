import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List as DefaultList, Spin, Icon, Text, Badge, Popover, List, Tag, Tabs } from 'antd'
import {Button, Modal} from '../components/FormComponents'
import {Link} from '../components/RouteComponents'
import moment from 'moment'
import {userReadQueriesStart, userReadSubordinatesStart, allocateQuery, adminRequestEditQuery} from '../redux/actions/actionCreators'
import {Chart, Axis, Tooltip, Geom} from "bizcharts";


  
class Queries extends Component {

    constructor(props){
        super(props)
        props.userReadQueriesStart(props.user.uid)
        props.userReadSubordinatesStart(props.user)
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


    handleAllocate = (uid,query, role) => (event) => {
        
            this.props.allocateQuery(uid, query, role)
        
    }

    handleRequestEdit = (query) => (event) => {
        this.props.adminRequestEditQuery({query})
    }

   

   AllocateDialog(query, subordinates) { 
        return(
            <Modal 
                title="Allocate" 
                buttonText="Allocate"
                handleOk={() => {}}
                handleCancel={() => {}}>
                    <List
                        size="small"
                        bordered
                        dataSource={subordinates}
                        renderItem={(subordinate) => (<List.Item><a onClick = {this.handleAllocate(subordinate.id,query, subordinate.role)}>{subordinate.email}></a></List.Item>)}
                    />
            </Modal>
        );
    }

    render() {
        let {queries, subordinates} = this.props;
        let date = moment(queries.dueOn).format('DD MMM YYYY')
        const data = [{'hi' : 1},{'bye': 2}];
        
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
                    dataSource={queries}
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
                    dataSource={queries}
                    renderItem={query =>  (
                       
                       <div>
                           {query.suggestEdit ? (
                           
                                <DefaultList.Item
                                    actions={this.getActions(query)}
                                >
                                
                                
                                 <DefaultList.Item.Meta style={{margin : '0px'}}
                                        title={
                                            <Link to={{
                                                pathname : "/dashboard/query/"+query.id,
                                                state : { query }
                                            }}>{query.queries[0].query}</Link>
                                        } 

                                /> 
                                <Button
                                    type = 'primary'
                                    size = 'small'
                                    onClick = {this.handleRequestEdit(query)}>
                                      Request Edit
                                 </Button>

                                 <div>
                                     {this.AllocateDialog(query, subordinates)}
                                     </div>

                           </DefaultList.Item> ) : null }
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
