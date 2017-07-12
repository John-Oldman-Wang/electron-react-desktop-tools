const { ipcRenderer } = global.require('electron');
const React = require('react');
const ReactDOM = global.require('react-dom');
const TitleBar = require('./component/titleBar.js');
const Nav = require('./component/NavPane.js');
const Window = require('./component/window.js');

ReactDOM.render(React.createElement(TitleBar, { name: 'My Windows Application' }), document.getElementById('header'));

ReactDOM.render(React.createElement(Nav, null), document.getElementById('main'));