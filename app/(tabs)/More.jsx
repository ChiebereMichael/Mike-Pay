import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Link, Navigator } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const More = () => {
  return (
    <View style={styles.container}>
      <Text>More</Text>
      <TouchableOpacity>Big Mike</TouchableOpacity>
    </View>
  )
}



export default More

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10
  }
})