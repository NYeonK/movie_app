import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// 밑의 <App />은 HTML를 반환하는 component
// javascript와 HTML 사이의 조합을 jsx
// jsx는 javascript안의 HTML
// react application은 한번에 하나의 component만 rendering할 수 있다.
// -> 고로 App.js에서는 여러개 넣을 수 있으니까 거기서 작업할 것!
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('potato')
);

