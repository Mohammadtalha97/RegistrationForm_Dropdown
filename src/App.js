import React from 'react';
import './App.css';
import Router from './Routes';
import { Provider } from 'react-redux'
import store from '../src/Redux/Store/Store';


function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
