const React =require('react');
const { Component } =require('react')
const { Window, TitleBar, Text } =require('react-desktop/windows');

module.exports = class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        height="300px"
        padding="12px"
      >
        <TitleBar title="My Windows Application" controls background={this.props.color}/>
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </Window>
    );
  }
}