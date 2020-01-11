import React, { Component } from 'react';
import { BackHandler, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Routes from './src/Routes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this))
  }

  handleBackButton(){
    if (Actions.currentScene == "menu"){
      BackHandler.exitApp()
    }
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default App;
