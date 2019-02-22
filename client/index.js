import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Root from './components/root'
import '../public/styles/main.css'
import {
    BrowserRouter as Router
  } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);