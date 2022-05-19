import React from 'react';
import { Component, Fragment } from 'react'
import Spinner from './Spinner';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = { page: 1, users: [], isLoading: true }
  }

  loadUsers(page) {
    this.setState({isLoading:true})
    fetch(`https://reqres.in/api/users?page=${this.state.page}`)
      .then(response => response.json())
      .then(response => {
      
        this.setState({
          users: response.data, isLoading: false
        })
      })
      .finally(() => this.setState({ isLoading: false }))
  }

  componentDidMount() {
    this.loadUsers(this.state.page);
  }

  click(n){
    this.loadUsers(this.state.page+n);
    this.setState((state) => {
      return {
        page: state.page+n
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Spinner display={this.state.isLoading}></Spinner>
        <ul>
          {!this.state.isLoading && this.state.users.map(u => <li key={u.id}>{u.email}</li>)}
        </ul>
        <button onClick={() => {this.click(-1)}}> Prev</button>
        <button onClick={() => {this.click(1)}}> Next</button>
      </Fragment>
    )

  }
}
