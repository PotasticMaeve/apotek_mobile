import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width: '100%', backgroundColor: 'red', height: '9%', flexDirection: 'row'}}> 

        <View style={{ width: '12%', height: '100%', backgroundColor: 'blue'}}>

        </View>

        <View>
          <Text> MyTitle </Text>
        </View>

      </View>
    );
  }
}

export default Navbar;
