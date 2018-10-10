import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LoginForm from './LoginForm';
import {reducer} from './reducer.js';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;
