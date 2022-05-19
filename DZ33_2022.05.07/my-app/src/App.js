
import React from 'react';
import { Component, Fragment } from 'react'
import Cat from './Cat';
import Cell from "./Cell";
import Time from './Time';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '1' , sec:''};
    this.changeData = this.changeData.bind(this);
  }

  changeData(data) {
    this.setState({data})
  }

  render() {    
    return (
      <Fragment>        
          <Cell data={this.state.data} onDataChange={this.changeData}/>
          <br></br>          
          <Cell data={this.state.data} onDataChange={this.changeData}/> 
          <br></br>
          <Time/>     
          <Cat data={this.state.data}/>  
      </Fragment>
    );
  }

}


