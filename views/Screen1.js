import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Screen1 = () => {
  return (
 
    <View style={StyleSheet.container}>
    <Text>Screen1</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingVertical: 10,
      height: "100%",
      backgroundColor: "yellow",
      alignItems: 'center',
      // justifyContent: 'center',
    },
  });

export default Screen1

