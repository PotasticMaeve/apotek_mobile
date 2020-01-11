import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';

import style from '../stylesheets/main_style'
import Navbar from '../Navbar'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
      <ScrollView style={style.mainBody}>
        <Navbar/>
          <Image
          source  = {{ uri: "https://avatars0.githubusercontent.com/u/25729519?s=400&v=4" }}
          style   = {{ width: 200, height: 200, marginHorizontal: 100,margin: 20}}
        />

          <TouchableOpacity style={style.sectionBox} onPress={ ()=> Actions.supplier() }>
            <View style={style.sectionContainer}>
              <Text style={style.sectionTitle}> Supplier Menu </Text>
              <Text style={style.sectionDescription}>Useful for tracking and managing product's supplier profiles</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.sectionBox} onPress={ ()=> Actions.user() }>
            <View style={style.sectionContainer}>
              <Text style={style.sectionTitle}> User Menu </Text>
              <Text style={style.sectionDescription}>Useful for authentication and authorization. able to manage user data. </Text>
            </View>
          </TouchableOpacity>
                
        </ScrollView>
    );
  }
}

export default Menu;
