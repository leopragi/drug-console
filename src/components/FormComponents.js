import React, { Component } from 'react';
import { Input, Card as DefaultCard, Button as DefaultButton, List as DefaultList} from 'antd';
import style from 'styled-components'

const InputContainer = style.div`
    padding : 5px;
`;

const ButtonContainer = style.div`
    display : flex;
    padding : 10px;    
    justify-content: flex-end;
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
    let {name, size, loading, onClick} = props;
    return(
            <ButtonContainer>
                <DefaultButton
                    name={name}
                    onClick={onClick}
                    loading={loading} 
                    type="primary"
                    size={size}>
                    {props.children}
                </DefaultButton>
            </ButtonContainer>
        )
}


export function Card(props){
    let {title,extra, loading} = props;
    return (
        <DefaultCard 
            loading = {loading} 
            title = {title}
            extra = {extra} >
            {props.children}
        </DefaultCard>  
    );
}

export function List(props){
    let {data} = props;

    return(
        <DefaultList
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <DefaultList.Item>
                    <DefaultList.Item.Meta
                        description = {item.queries[0].queryString}    
                    />
                </DefaultList.Item>
        )}
    />
    )
}



    
