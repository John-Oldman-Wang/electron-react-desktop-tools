var _class, _temp;

const React = require('react');
const { Component } = require('react');
const { TitleBar } = require('react-desktop/windows');
const { ipcRenderer } = require('electron');
module.exports = (_temp = _class = class extends Component {

  constructor(props) {
    super(props);

    this.close = function () {
      ipcRenderer.send('closeWindow');
      console.log('close');
    };

    this.minimize = function (e) {
      ipcRenderer.send('minimize');
      var evt = new MouseEvent("mouseout", {
        bubbles: true,
        cancelable: true,
        view: global
      });
      e.currentTarget.dispatchEvent(evt);
      console.log('minimize');
    };

    this.toggleMaximize = function () {
      ipcRenderer.send('maximize');
      this.setState({ isMaximized: !this.state.isMaximized });
    }.bind(this);

    this.state = { isMaximized: false };
    ipcRenderer.on('whetherMaximize', function (e, mes) {
      this.setState({ isMaximized: mes });
    }.bind(this));
  }


  render() {
    return React.createElement(TitleBar, {
      title: this.props.name,
      controls: true,
      isMaximized: this.state.isMaximized,
      theme: this.props.theme,
      background: this.props.color,
      onCloseClick: this.close,
      onMinimizeClick: this.minimize,
      onMaximizeClick: this.toggleMaximize,
      onRestoreDownClick: this.toggleMaximize
    });
  }
}, _class.defaultProps = {
  color: '#cc7f29',
  theme: 'light'
}, _temp);