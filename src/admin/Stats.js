import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button, Input} from '../components/FormComponents'
import {Chart, Axis, Tooltip, Geom} from "bizcharts";
import { userReadQueriesStart } from '../redux/actions/actionCreators';
import { DatePicker } from 'antd';
import moment from 'moment';

const {RangePicker} = DatePicker;


class  FetchChart extends Component{
    
    
    render(){
        var {data} = this.props
        return(
            <Chart height={400} width={600} data={data} >
                <Axis name="queries" />
                <Axis name="count" />
                <Geom type='interval' position="queries*count"/>
            </Chart>
        )
}
}

class Stats extends Component{
 

    state = {
        showChart : false,
        startMonth : 0,
        endMonth : 0,
        startYear : 0,
        endYear : 0,
        data : []
    }

    constructor(props){
        super(props)
        
        props.userReadQueriesStart();
    }

    onButtonClick = (queries) => (event) => {
        this.setState({
            showChart : true
        });

                for(var que in queries){
                    let fullDate = new Date(queries[que].queries[0].askedOn)
                    let month = fullDate.getMonth();
                    let year =  fullDate.getFullYear();
                    

                    if( month >= this.state.startMonth && month <= this.state.endMonth ){
                       
                        if( year >= this.state.startYear && year <= this.state.endYear ){
                               console.log(this.state.data.month)
                                if(this.state.data.month == undefined){
                                    this.state.data.push({
                                        month : 1
                                    })
                                    
                                }
                                else{
                                    this.state.data.push({
                                        month : this.state.data.month+1
                                    })
                                }
                            }
                        }
                  }
        
    }

     
   

   render(){
        let {queries} = this.props;
        console.log(queries)

         function onDateEntered(date, dateString) {
            this.setState({
                startMonth : moment(dateString[0]).month(),
                endMonth : moment(dateString[1]).month(),
                startYear : moment(dateString[0]).year(),
                endYear : moment(dateString[1]).year(),
             
            })
        }

     
        return(  
            <div> 
                <RangePicker onChange={onDateEntered.bind(this)} />
                
                <Button onClick={this.onButtonClick(queries)} > Get Chart </Button>
                {console.log(this.state)}
                {this.state.showChart ?
                     <FetchChart 
                     data={this.state.data}
                       /> 
                        : null}  

            </div>
        )
}
        
}

const mapStateToProps = (state, ownProps) => {
    return{
        queries : state.dician.queries
    }
} 
export default connect(mapStateToProps,{userReadQueriesStart})(Stats);