import React, { Component } from 'react';
import {
  View, 
  Text, 
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import style from '../stylesheets/main_style'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  getData(){
    return fetch('http://68.183.190.242:1281/user')
      .then((response) => response.json() )
      .then(json => {
          this.setState({users: json.data })
      })
  }

  componentDidMount(){
      this.getData();
  }

  render() {
    return (
      <ScrollView style={style.mainBody}>

        {this.state.users.map( (item, key) => (

          <TouchableOpacity key={key} style={style.sectionBox}>
            <View style={style.memberContainer}>
              
              <View style={style.memberRow}>

                <View style={style.memberTitle}>
                  <Text style={style.memberTitleText}>{item.name }</Text>
                </View>
                
                <View style={style.memberDescription}>
                  <Text>Email: {item.email }</Text>
                  <Text>User Auth Level: {item.userlevel }</Text>
                </View>

              </View >
            </View>
            <Button title="Details"></Button>
          </TouchableOpacity>

        ))}
                
      </ScrollView>
    );
  }
}

export default User;
