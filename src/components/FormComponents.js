import React, { Component } from 'react';
import { Input, Card as DefaultCard, Button as DefaultButton} from 'antd';
import style from 'styled-components'

const InputContainer = style.div`
    padding : 0.3em
    
`;



export function TextInput(props){
    let {name, placeholder, size, value, type, onChange} = props;
    return (
            <InputContainer>
                <Input 
                    name={name}
                    size={size}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </InputContainer>
            )
}

export function Button(props){
    let {name, size, loading} = props;
    return(
            <InputContainer>
                <DefaultButton
                    name={name}
                    loading={loading} 
                    type="primary"
                    size={size}>
                    {props.children}
                </DefaultButton>
            </InputContainer>
        )
}


export function Card(props){
    let {title,extra, loading} = props;
        return (
            <InputContainer>
                <DefaultCard 
                    style = {{width : 300}}
                    loading = {loading} 
                    title = {title}
                    extra = {extra} >
                    {props.children}
                </DefaultCard>
            </InputContainer>
    );
}



    
