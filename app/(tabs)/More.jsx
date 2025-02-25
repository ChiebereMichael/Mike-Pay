import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Link, Navigator } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const More = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}> 
        <Text style={styles.text}> Notifications Screen</Text>
      </View>
    </View>
  )
}



export default More

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#000',
    height:'100%',
    paddingHorizontal:10
  },
  flex:{
    paddingTop:50
  },
  text:{
    color:'#fff',
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold'
  }
})