import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let nav = {
  "Политика" : '/politican',
  "В мире" : '/world',
  "Общество" : '/society',
  "Экономика" : '/economy',
  "Спорт" : '/sport',
  "Проишествия" : '/incidents',
  "Культура" : '/culture',
  "Здоровье" : '/health',
  "Интернет" : '/internet',
  "Авто" : '/auto', 
}

ReactDOM.render(<App nav={nav} />,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
