import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Routes from './src/Routes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default App;
