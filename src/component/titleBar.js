import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { TitleBar } from 'react-desktop/windows';
const { ipcRenderer } =global.require('electron');
export default class extends Component {
  static defaultProps = {
    color: '#090',
    theme: 'light'
  };

  constructor(props) {
    super(props);
    this.state = { isMaximized: false };
    ipcRenderer.on('whetherMaximize',function(e,mes){
      this.setState({ isMaximized: mes});
    }.bind(this))
  }
  close = function(){
    ipcRenderer.send('closeWindow')
    console.log('close');
  }
  minimize = function(){
    ipcRenderer.send('minimize')
    console.log('minimize');
  }
  toggleMaximize =function(){
    ipcRenderer.send('maximize')
    this.setState({ isMaximized: !this.state.isMaximized });
  }.bind(this)

  render() {
    return (
      <TitleBar
        title="My Windows Application"
        controls
        isMaximized={this.state.isMaximized}
        theme={this.props.theme}
        background={this.props.color}
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleMaximize}
      />
    );
  }
}