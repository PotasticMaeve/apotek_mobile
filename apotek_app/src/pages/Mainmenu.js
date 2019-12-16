/**
 * Simple Apotek App
 * https://github.com/accalina
 *
 * @Author Accalina
 */

import React from 'react';
import { Actions } from 'react-native-router-flux'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Mainmenu: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <Image
            source  = {{ uri: "https://avatars0.githubusercontent.com/u/25729519?s=400&v=4" }}
            style   = {{ width: 200, height: 200, marginHorizontal: 100}}
          />


          <View style={styles.body}>


            <TouchableOpacity style={styles.sectionContainer} onPress={ ()=> Actions.supplier() }>
              <Text style={styles.sectionTitle}>Supplier Menu</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Manage Supplier Data</Text>.
                Create, Read, Update, and Delete supplier data.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sectionContainer} onPress={ ()=> Actions.user() }>
              <Text style={styles.sectionTitle}>User Menu</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Manage User Data</Text>. Useful for authentication and authorization. able to
                Create, Read, Update, and Delete user data.
              </Text>
            </TouchableOpacity>

            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Mainmenu;
