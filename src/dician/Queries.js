import React, { Component } from 'react'
import {connect} from 'react-redux'
import {List as DefaultList, Button, Spin} from 'antd'

import {Link} from '../components/RouteComponents'
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
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
              {loadingMore && <Spin />}
              {!loadingMore && <Button onClick={this.onLoadMore}>Load More</Button>}
            </div>
          ) : null;
        return(
            <DefaultList
                loadmore={loadMore}
                itemLayout="horizontal"
                dataSource={queries}
                
                 renderItem={query => (
                    <DefaultList.Item>
                        <DefaultList.Item.Meta
                            title={<Link to={{
                                pathname : "/dashboard/query/"+query.id,
                                state : { query }
                            }}>Link</Link>}
                            description = {query.queries[0].queryString}    
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
