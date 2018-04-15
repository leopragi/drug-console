import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List as DefaultList, Spin, Icon, Text, Badge, Popover, List, Tag } from 'antd'
import {Button, Modal} from '../components/FormComponents'
import {Link} from '../components/RouteComponents'
import moment from 'moment'
import {userReadQueriesStart, userReadSubordinatesStart} from '../redux/actions/actionCreators'
  
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

    render() {
        let {queries, subordinates} = this.props;
        let date = moment(queries.dueOn).format('DD MMM YYYY')

        const AllocateDialog = () => <Modal 
            title="Allocate" 
            buttonText="Allocate"
            handleOk={() => {}}
            handleCancel={() => {}}>
            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={subordinates}
                renderItem={subordinate => (<List.Item>{subordinate.email}</List.Item>)}
            />
        </Modal>;

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
                                    <AllocateDialog />
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

export default connect(mapStateToProps, {userReadQueriesStart, userReadSubordinatesStart})(Queries);
