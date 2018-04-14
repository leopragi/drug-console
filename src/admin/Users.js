import React, { Component } from 'react'
import {connect} from 'react-redux'
import style from 'styled-components'

import { Card, Button } from '../components/FormComponents';
import { adminReadAllUserStart } from '../redux/actions/actionCreators'

class Users extends Component {
  
    state = {
        selectedUid : '',
        authorize : false
    }

    constructor(props){
        super(props)
        props.adminReadAllUserStart();        
    }

    render() {
        return (
            <div>Users</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.admin.users
    }
}


export default connect(mapStateToProps,{adminReadAllUserStart})(Users);