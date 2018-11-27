import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const App = props => (  
  <div className="App">
      {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}
export default App



