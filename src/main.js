const { ipcRenderer } =global.require('electron');
import React from 'react';
const ReactDOM =global.require('react-dom');
import TitleBar from './component/titleBar.js';
import Nav from './component/NavPane.js';
import Window from './component/window.js';

ReactDOM.render(
	<TitleBar name="My Windows Application" />,
	document.getElementById('header')
)

ReactDOM.render(
	<Nav />,
	document.getElementById('main')
)