import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "modern-normalize";
import { GlobalStyle } from "./GlobalStyle";


ReactDOM.render(
  <>
  <GlobalStyle/>
  <App />
  </> ,
  document.getElementById('root')
);


