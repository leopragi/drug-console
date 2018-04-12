import React, { Component } from 'react';
import { Input, Card as DefaultCard} from 'antd';

export function TextInput(props){
    let {name, placeholder, size, value, type, onChange} = props;
    return <Input 
                name={name}
                size={size}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
}


export function Card(props){
    let{title,extra, loading} = props;
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



    
