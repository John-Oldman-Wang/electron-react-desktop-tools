import React,{Component} from 'react';
import { TitleBar } from 'react-desktop/windows';
import { ipcRenderer } from 'electron';
export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
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
  minimize = function(e){
    ipcRenderer.send('minimize')
    var evt = new MouseEvent("mouseout", {
      bubbles: true,
      cancelable: true,
      view: global,
    });
    e.currentTarget.dispatchEvent(evt)
    console.log('minimize');
  }
  toggleMaximize =function(){
    ipcRenderer.send('maximize')
    this.setState({ isMaximized: !this.state.isMaximized });
  }.bind(this)

  render() {
    return (
      <TitleBar
        title={this.props.name}
        controls={true}
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