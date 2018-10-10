import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LoginForm from './LoginForm';
import './App.css';

const reducer = () => {};
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
