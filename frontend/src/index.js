import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import FeedPage from './component/page/FeedPage';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import 'ui-neumorphism/dist/index.css';


import { changeContent } from './reducer'


const store = createStore(changeContent)

ReactDOM.render(
  <Provider store = {store}>
      <FeedPage />
  </Provider>

  ,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
