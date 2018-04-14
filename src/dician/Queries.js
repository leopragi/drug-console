import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List as DefaultList, Button, Spin, Icon, Text} from 'antd'

import {Link} from '../components/RouteComponents'
import moment from 'moment'
import {userReadQueriesStart} from '../redux/actions/actionCreators'

class Queries extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
          }
        props.userReadQueriesStart(props.user.uid)
    }

    
   componentDidMount(){
       this.setState({
           loading : false,
       })

   }

   

    onLoadMore = () => {
        this.setState({
          loadingMore: true,
        });
    }

    render() {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        let {queries} = this.props;
        let date = moment(queries.dueOn).format('DD MMM YYYY')

        const IconText = ({ text }) => (
            <span>
              <Icon style={{ marginRight: 8 }} />
              {text}
            </span>
          );
       { /*const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
              {loadingMore && <Spin />}
              {!loadingMore && <Button onClick={this.onLoadMore}>Load More</Button>}
            </div>
       ) : null;*/}
        return(
            <DefaultList
              //  loadmore={loadMore}
                itemLayout="vertical"
                dataSource={queries}
                renderItem={query => (
                    <DefaultList.Item
                        actions={[<IconText text = {'@'+query.at} />,<IconText text = {'Ratings : '+query.feedback+'/5'} />,<IconText text = 'feedback'/>]}
                        extra={date}
                        
                    >
                        <DefaultList.Item.Meta

                            title={<Link to={{
                                pathname : "/dashboard/query/"+query.id,
                                state : { query }
                            }}><b>{query.queries[0].query}</b></Link>}
                            description = {query.answer}
                               
                       />
                    </DefaultList.Item>
                )}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
	return {
        queries : state.queries,
        user : state.user
    }
}

export default connect(mapStateToProps, {userReadQueriesStart})(Queries);
