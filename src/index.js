import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>
    <Counter max={15} step={5} />
  </React.StrictMode>,
  document.getElementById('root')
);

