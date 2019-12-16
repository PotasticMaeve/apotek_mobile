///////////////////////////////////////////
// Main CSS Based Stylesheet for Liliana //
//   Liliana Base Template - Accalina    //
///////////////////////////////////////////

import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    mainBody: {
      backgroundColor: "#c7ecee",
      flex: 1,
    },
  
    sectionBox : {
      paddingHorizontal: 30
    },
  
    sectionContainer: {
      marginTop: 32,
      paddingVertical: 5,
      paddingHorizontal: 24,
      backgroundColor: "#dff9fb",
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: "#2d3436",
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: "#636e72",
    },

    
    // Members
    memberContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop: 5,
      paddingVertical: 5,
      paddingHorizontal: 24,
      backgroundColor: "#dff9fb",
    },
    memberRow:{
      flexDirection: 'column',
    },
    memberTitle: {
      flexDirection: "row",
      paddingHorizontal: 8,
      fontSize: 16,
      fontWeight: 'bold',
      color: "#2d3436",
    },
    memberTitleText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    memberDescription: {
      flexDirection: "column",
      paddingHorizontal: 8,
      fontSize: 10,
      fontWeight: '400',
      color: "#636e72",
    },

  
  })

export default style