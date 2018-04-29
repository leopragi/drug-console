import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List as DefaultList, Spin, Icon, Text, Badge, Popover, List, Tag } from 'antd'
import {Button, Modal} from '../components/FormComponents'
import {Link} from '../components/RouteComponents'
import moment from 'moment'
import {userReadQueriesStart, userReadSubordinatesStart, allocateQuery} from '../redux/actions/actionCreators'
  
class Queries extends Component {

    state = {
        subordinate: undefined,
        query : undefined
    }

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


    handleAllocate = (event) => {        
        this.props.allocateQuery(this.state)
    }
        
    selectSubordinate = (query, subordinate) => (event) => {
        this.setState({
            query: query,
            subordinate : subordinate,
        })
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
        
        return(
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

export default connect(mapStateToProps, {userReadQueriesStart, userReadSubordinatesStart, allocateQuery})(Queries);
