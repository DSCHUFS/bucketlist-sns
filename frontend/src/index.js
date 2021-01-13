import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FeedPage from './component/page/FeedPage';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import 'ui-neumorphism/dist/index.css';


ReactDOM.render(
  <div>
      <FeedPage/>
  </div>
  ,
  document.getElementById('root')
);

reportWebVitals();
