import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import Root from './components/root'
import '../public/styles/main.css'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);