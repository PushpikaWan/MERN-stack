
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2> Dashboard </h2>;
const Surveys = () => <h2> Surveys </h2>;

export class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return(
      <div className="container">
       <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={Landing} exact></Route>
          <Route path="/surveys" component={Dashboard}></Route>
          <Route path="/surveys/new" component={Surveys}></Route>
        </div>
       </BrowserRouter>
      </div>
    );
  }

}

export default connect(null, actions)(App);