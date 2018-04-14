import React, { Component } from 'react';
import { Input, Card as DefaultCard, Button as DefaultButton, List as DefaultList, Modal as DefaultModal} from 'antd';
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
    let {name, size, loading, onClick, type} = props;
    return(
            <ButtonContainer>
                <DefaultButton
                    name={name}
                    onClick={onClick}
                    loading={loading} 
                    type={type}
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

export class Modal extends React.Component {
    
    state = { visible: false }
    
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        this.props.handleOk();
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
        this.props.handleCancel();
    }
    
    render() {
        let {title, buttonText} = this.props;
        return (
            <div>
                <Button type="primary" size="small" onClick={this.showModal}>{buttonText}</Button>
                <DefaultModal
                    title={title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    {this.props.children}
                </DefaultModal>
            </div>
        );
    }
}
