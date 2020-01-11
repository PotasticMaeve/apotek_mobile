import React, { Component } from 'react';
import { BackHandler, StatusBar, View } from 'react-native';
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
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={"#c7ecee"} barStyle="dark-content"/>
        <Routes/>
      </View>

    );
  }
}

export default App;
