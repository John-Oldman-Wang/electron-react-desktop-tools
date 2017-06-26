import React from 'react';
import ReactDOM from 'react-dom';
const { ipcRenderer } =global.require('electron');
import titleBar from './component/titleBar.js';
console.log(titleBar)
ReactDOM.render(<titleBar />,document.getElementById('titleBar'))