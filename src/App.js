import React, { Component } from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import Head from './Head/Head'
import Nav from './Nav/Nav'
import Loading from "./Loading/Loading"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ loading: true }));
    }, 1200);
  }
  render() {
    if(!this.state.loading){
      return (
        <Loading />
      )
    }
    return (
      <div>
        <Head />
        <Nav />
      </div>
    );
  }
}

export default withRouter(App);
