import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import {
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Image,

} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient'

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

          <TouchableOpacity style={style.sectionBox} onPress={ ()=> Actions.supplier() } activeOpacity={.7}>
            <View style={style.cardMenu}>

              <View>
                <Text style={style.sectionTitle}> Supplier</Text>  
                <Text style={style.sectionTitle}> Menu</Text>
              </View>
              
              <View style={{ backgroundColor: "rgba(129, 236, 236, 0.7)", borderTopLeftRadius: 100, borderBottomRightRadius:20, borderTopRightRadius:20, zIndex: 1, position: "absolute", height: 126, width: 200, right: 0 }}></View>

              <Image
                  source  = {{ uri: "https://avatars0.githubusercontent.com/u/25729519?s=400&v=4" }}
                  style   = {{ width: 100, height: 100, zIndex: 2 }}
                />


              {/* <Text style={style.sectionDescription}>Useful for tracking and managing product's supplier profiles</Text> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.sectionBox} onPress={ ()=> Actions.user() } activeOpacity={.7}>
            <View style={style.cardMenu}>
              <Text style={style.sectionTitle}> User Menu </Text>
              <Text style={style.sectionDescription}>Useful for authentication and authorization. able to manage user data. </Text>
            </View>
          </TouchableOpacity>
                
        </ScrollView>
    );
  }
}

export default Menu;
