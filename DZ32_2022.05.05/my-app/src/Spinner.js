
import React from 'react';
import { Component, Fragment } from 'react'


export default class Spinner extends Component{
    constructor(){
        super()
    }
    render(){
        const isShow = this.props.display;
        return(<div className='loader'> Loading...</div>)
    }
}