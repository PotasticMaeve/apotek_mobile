import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { red } from 'ansi-colors';

class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor: "red" }}>
        <Text> Sidemenu </Text>
        <Image
            source  = {{ uri: "https://avatars0.githubusercontent.com/u/25729519?s=400&v=4" }}
            style   = {{ width: 200, height: 200, marginHorizontal: 100,margin: 20}}
          />
      </View>
    );
  }
}

export default Sidemenu;
