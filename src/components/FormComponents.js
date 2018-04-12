import React, { Component } from 'react';
import { Input, Card as DefaultCard} from 'antd';

export function TextInput(props){
    let {placeholder} = props;
    return <Input 
                placeholder={placeholder}
            />
}


export function Card(props){
    let {title,extra, loading} = props;
    return (
        <DefaultCard 
            style = {{width : 300}}
            loading = {loading} 
            title = {title}
            extra = {extra} >
            {props.children}
        </DefaultCard>
    );
}



    
