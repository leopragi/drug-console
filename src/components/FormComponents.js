import React, { Component } from 'react';
import { Input } from 'antd';

export function TextInput(props){
    let {placeholder} = props;
    return <Input 
                placeholder={placeholder}
            />
}