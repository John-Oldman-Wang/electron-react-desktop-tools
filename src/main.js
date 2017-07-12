const { ipcRenderer } =global.require('electron');
const React = require('react');
const ReactDOM =global.require('react-dom');
const TitleBar =require('./component/titleBar.js');
const Nav =require('./component/NavPane.js');
const Window =require('./component/window.js');

ReactDOM.render(
	<TitleBar name="My Windows Application" />,
	document.getElementById('header')
)

ReactDOM.render(
	<Nav />,
	document.getElementById('main')
)