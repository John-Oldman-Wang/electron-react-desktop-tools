import React from 'react';
import ReactDOM from 'react-dom';
const { ipcRenderer } =global.require('electron');
import TitleBar from './component/titleBar.js';
import HelloMessage from './component/hello.js';


ReactDOM.render(
  <HelloMessage name="World" />,
  document.getElementById('main')
);

ReactDOM.render(
	<TitleBar name="My Windows Application" />,
	document.getElementById('header')
)