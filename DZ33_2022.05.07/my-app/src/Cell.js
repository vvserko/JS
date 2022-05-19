import React from 'react';
import { Component, Fragment } from "react";

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onDataChange(e.target.value);
    }
    render() {        
        return (
            <Fragment>
                <label>
                    Имя:
                    <input type="text" value={this.props.data} onChange={this.handleChange} />
                </label>
            </Fragment>
        )
    }
}

