import React, { Component } from 'react';
import {
    View, 
    Text, 
    TouchableOpacity,
    ScrollView,
    Button,
} from 'react-native';

import style from '../stylesheets/main_style'

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
        suppliers: []
    };
  }

  getData(){
      return fetch('http://68.183.190.242:1281/supplier')
        .then((response) => response.json() )
        .then(json => {
            this.setState({suppliers: json.data })
        })
  }

  componentDidMount(){
      this.getData();
  }

  render() {
    return (
      <ScrollView style={style.mainBody}>

        {this.state.suppliers.map( (item, key) => (

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

export default Supplier;
