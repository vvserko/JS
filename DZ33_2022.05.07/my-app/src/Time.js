import React from "react";
import { Component, Fragment } from "react";

export default class Time extends Component {
    constructor() {
        super();
        this.state ={date: new Date()}
        this.obnov = this.obnov.bind(this);        
    }
    obnov(){
        this.setState({date:new Date()})
    }
    
    render() {
        const date = this.state.date;
        const sec =  date.getSeconds();
        return (
            <Fragment>
                <button onClick={this.obnov}>Обновить</button>
            <p>{date.toLocaleString()}</p>
            <br></br>
            <p>{sec}</p>
            </Fragment>
        )
    }
}