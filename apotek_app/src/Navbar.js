import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from 'react-native-router-flux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
          <View style={{flex: 1}}> 
            <LinearGradient 
              colors={['#3d72b4','#3498db']}
              style={{ height: 55, width: '100%', flexDirection:'row'}}
              >
                <View style={{marginLeft: 5 ,width: '12%', height: '100%', alignItems: "center", justifyContent: "center"}}>
                  <TouchableOpacity onPress={() => Actions.drawerOpen()} activeOpacity={.7}>
                    <Icon
                      name='menu'
                      type='AntDesign'
                      color='#00aced'
                      size={30}
                    />
                  </TouchableOpacity>

                </View>
                <View style={{ width: '100%', height: '100%', alignItems: "flex-start", justifyContent: "center"}}>
                  <Text style={{fontSize: 20, color:'#fff'}}> MyTitle </Text>
                </View>
              
            </LinearGradient>

          </View>
    );
  }
}

export default Navbar;
