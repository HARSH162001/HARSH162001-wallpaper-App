import React from 'react'
import {Text, View, StyleSheet,TextInput, Image} from 'react-native'
import logo from '../assets/searchicon.png'

const Navbar = () => {
  return (
    <View style = {StyleSheet.container}>
     {/* <Text>Navbar</Text> */}
    <View style={styles.searchcont}>
    <Image source={logo} style={styles.icon}/>
    <TextInput style={styles.searchinput}
     placeholder="Search Anything.."/>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingVertical: 10,
    //   height: '100%',
      backgroundColor: "green",
      alignItems: "center",
      // justifyContent: 'center',
    },
    icon:{
        width:30,
        height:30,
    },
    searchcont:{
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        elevation: 10,
        borderRadius: 10,
        padding: 10,
        width: "80%",
    },
    searchinput:{
        width: "90%",
        fontSize: 20,
        paddingLeft: 10,
    }
  });

export default Navbar