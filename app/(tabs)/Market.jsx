import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import Charts from "@/components/Charts";
const btc = require("@/assets/images/btc2.jpg");

const Market = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Image source={btc} style={styles.btc} />
        <Text style={styles.bit}>Bitcoin/BTC</Text>
      </View>
      <View>
        <View>
          <Text style={styles.bal}>$12,550.50</Text>
        </View>
        <View style={styles.per}>
          {/* <Ionicons name="arrow-up" size={18} /> */}
          <Text>11.75% </Text>
        </View>
      </View>

      <View style={styles.market}>
        <View>
          <Text style={styles.h2}>POPULARITY</Text>
          <Text style={styles.vol}>#1</Text>
        </View>

        <View>
          <Text style={styles.h2}>MARKET CAP</Text>
          <Text style={styles.vol}>$832.4b</Text>
        </View>

        <View>
          <Text style={styles.h2}>VOLUME</Text>
          <Text style={styles.vol}>$60.2b</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <Charts />
      <View style={styles.flex1}>
        <Text style={styles.h2}>MIN $86.21</Text>
        <Text style={styles.h2}>MAX $137.88$</Text>
      </View>
    </View>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor:'#000'
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 50,
  },
  btc: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // marginRight:10
  },
  bal: {
    fontSize: 30,
    marginLeft: 5,
    marginTop:10,
    fontWeight: "bold",
    color:'#fff'
  },
  vol:{
    fontSize:20,
    color:'#fff'
  },
  h2:{
    fontSize:12,
    color:'#fff'
  },
  market:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    marginHorizontal:20
  },
  line:{
    borderWidth:1,
    borderColor:'gray',
    width:'90%',
    alignSelf:'center',
    marginTop:30
  },
  bit: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 5,
    fontWeight: "bold",
    color:'#fff'

  },
  per: {
    display: "flex",
    marginTop: 10,
    // marginLeft: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 1,
    alignSelf: "center",
    left: -130,
    backgroundColor:'#008AC3',
    borderColor:'#008AC3',
    alignItems: "flex-start",
  },
  flex1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:30,
    marginHorizontal:20
  },
  h2:{
    fontSize:12,
    color:'gray'
  }
});
