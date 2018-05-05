import React, { Component } from 'react';
import { Input as DefaultInput, Card as DefaultCard, Select as DefaultSelect, Form, Button as DefaultButton, List as DefaultList, Modal as DefaultModal} from 'antd';
import style from 'styled-components'
const FormItem = Form.Item;
const Option = DefaultSelect.Option;

const ButtonContainer = style.div`
    display : flex;
    padding : 5px;    
`;

export function Input(props){
    return (
            <FormItem>
                <DefaultInput {...props}/>
            </FormItem>
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

export function Select(props){
    let {options, renderRow} = props;
    return (
        <FormItem>
            <DefaultSelect {...props}>
            {
                (options || []).map((option, i) => {
                    let render = renderRow(option, i)
                    return <Option value={option.id} key={option.id}>{render}</Option>
                })
            }
            </DefaultSelect>
        </FormItem>  
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
