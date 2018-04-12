import React, { Component } from 'react';
import { Input } from 'antd';

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