import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from "@expo/vector-icons";
import MyAssets from '@/components/MyAssets';

const Assets = () => {
  const price = '$12,550.50';
  const [showBalance, setShowBalance] = useState(true);  //show balance
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h3}>Portfolio Balance</Text>
        <View style={styles.head1}>
          <Text style={styles.bal}>{showBalance ? price :'****'}</Text>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            <Ionicons name={showBalance ? "eye" : "eye-off"} size={30} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={styles.per}>
          <Ionicons name="arrow-up" size={18}  />
          <Text style={styles.text}>10.75%</Text>
        </View>
      </View>
      <MyAssets/>
    </View>
  )
}

export default Assets

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    backgroundColor:'#008AC3',
    paddingHorizontal:10,
    height:200,
  },
  h3:{
    paddingLeft:10,
    paddingTop:60,
    fontSize:20
  },
  head1: {
    display: "flex",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  text:{
    color:'#fff',
    paddingRight:7
  },
  bal: {
    fontSize: 30,
    paddingLeft: 5,
    fontWeight: "bold",
  },
  per: {
    display: "flex",
    paddingTop: 5,
    // marginLeft: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 1,
    alignSelf: "center",
    left: -120,
    backgroundColor:'#000',
    borderColor:'#008AC3',
    alignItems: "flex-start",
  },
})