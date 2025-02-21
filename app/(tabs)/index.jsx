import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import CryptoPrice from "@/components/Card";
import MyPortfolio from "@/components/MyPortfolio"
const profile = require("@/assets/images/avatar.png");

export default function Index() {
  const dark = {
    container: {
      backgroundColor: "#000", 
    },
    textColor: "#fff",
    cardBackground: "#f4f4f4", 
    buttonColor: "#fff", 
    iconBackground: "#008AC3",
    iconColor: "#ffffff",
  };
  const price = '$12,550.50';
  const [showBalance, setShowBalance] = useState(true); 
  return (
    <View style={[styles.container, dark.container]}>
      <View style={styles.head}>
        <Image source={profile} style={styles.image} />
        <TouchableOpacity>
          <Ionicons
            name={"notifications-outline"} 
            size={34}
            color={dark.textColor}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.h2, { color: dark.textColor }]}>
        Portfolio Balance
      </Text>
      <View style={styles.head1}>
        <Text style={[styles.bal, { color: dark.textColor }]}>
          {showBalance ? price : "****"}
        </Text>
        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <Ionicons name={showBalance ? "eye" : "eye-off"}  size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.per}>
        <Ionicons name="arrow-up" size={18} color={dark.buttonColor} />
        <Text style={[styles.h3, { color: dark.buttonColor }]}>
          10.75%
        </Text>
      </View>

      <View style={styles.act}>
        <TouchableOpacity>
          <Ionicons
            name="arrow-up"
            size={30}
            style={[
              styles.icon,
              { backgroundColor: dark.iconBackground },
            ]}
            color={dark.iconColor}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="arrow-down"
            size={30}
            style={[
              styles.icon,
              { backgroundColor: dark.iconBackground },
            ]}
            color={dark.iconColor}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="swap-horizontal-outline"
            size={30}
            style={[
              styles.icon,
              { backgroundColor: dark.iconBackground },
            ]}
            color={dark.iconColor}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.sec}>
        <Text style={[styles.pin, { color: dark.textColor }]}>
          Pinned Portfolio
        </Text>
        <TouchableOpacity style={styles.blu}>
          <Text style={[styles.whi, { color: dark.buttonColor }]}>
            View All
          </Text>
          <Ionicons
            name="arrow-forward"
            size={16}
            color={dark.buttonColor}
          />
        </TouchableOpacity>
      </View>
      <CryptoPrice />
      <MyPortfolio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
    // paddingTop: 30,
  },
  head: { 
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
  },
  sec: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 20,
  },
  pin: {
    fontSize: 18,
  },
  blu: {
    display: "flex",
    flexDirection: "row",
  },
  whi: {
    fontSize: 14,
  },
  act: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    borderColor:'#008AC3',
    paddingHorizontal: 10,
  },
  icon: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderColor:'008AC3',
    alignSelf: "center",
    alignItems: "flex-start",
  },
  head1: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  h2: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 5,
  },
  h3: {
    fontSize: 14,
  },
  bal: {
    fontSize: 30,
    marginLeft: 5,
    fontWeight: "bold",
  },
  per: {
    display: "flex",
    marginTop: 5,
    // marginLeft: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 1,
    alignSelf: "center",
    left: -130,
    backgroundColor:'#008AC3',
    borderColor:'#008AC3',
    alignItems: "flex-start",
  },
});
