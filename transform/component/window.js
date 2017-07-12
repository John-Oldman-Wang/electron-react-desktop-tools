var _class, _temp;

const React = require('react');
const { Component } = require('react');
const { Window, TitleBar, Text } = require('react-desktop/windows');

module.exports = (_temp = _class = class extends Component {

  render() {
    return React.createElement(
      Window,
      {
        color: this.props.color,
        theme: this.props.theme,
        chrome: true,
        height: '300px',
        padding: '12px'
      },
      React.createElement(TitleBar, { title: 'My Windows Application', controls: true, background: this.props.color }),
      React.createElement(
        Text,
        { color: this.props.theme === 'dark' ? 'white' : '#333' },
        'Hello World'
      )
    );
  }
}, _class.defaultProps = {
  color: '#cc7f29',
  theme: 'light'
}, _temp);