import { Text, View, StyleSheet, TouchableOpacity, ImageSourcePropType, SafeAreaView, Animated } from "react-native";
import { Image } from "expo-image";
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import CryptoPrice from "@/components/Card";
import MyPortfolio from "@/components/MyPortfolio"
import { useNavigation } from "expo-router";

const profile = require("@/assets/images/avatar.png") as ImageSourcePropType;

interface ThemeColors {
  container: { backgroundColor: string };
  textColor: string;
  cardBackground: string;
  buttonColor: string;
  iconBackground: string;
  iconColor: string;
}

export default function Index() {
  const navigation = useNavigation<any>();
  
  const dark: ThemeColors = {
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
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const toggleBalance = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    setShowBalance(!showBalance);
  };

  return (
    <SafeAreaView style={[styles.container, dark.container]}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={profile} style={styles.profileImage} />
          <Text style={[styles.welcomeText, { color: dark.textColor }]}>
            Welcome back
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => navigation.navigate('more')}
        >
          <Ionicons name="notifications-outline" size={24} color={dark.textColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={[styles.balanceLabel, { color: dark.textColor }]}>
          Portfolio Balance
        </Text>
        <View style={styles.balanceRow}>
          <Animated.Text style={[styles.balanceAmount, { color: dark.textColor, opacity: fadeAnim }]}>
            {showBalance ? price : "****"}
          </Animated.Text>
          <TouchableOpacity onPress={toggleBalance} style={styles.eyeButton}>
            <Ionicons name={showBalance ? "eye" : "eye-off"} size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.percentageTag}>
          <Ionicons name="arrow-up" size={16} color={dark.buttonColor} />
          <Text style={styles.percentageText}>10.75%</Text>
        </View>
      </View>

      <View style={styles.act}>
        <TouchableOpacity onPress={() => navigation.navigate("p2p")}>
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
        <TouchableOpacity onPress={() => navigation.navigate("p2p")}>
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
        <TouchableOpacity onPress={() => navigation.navigate('p2p')}>
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
        <TouchableOpacity style={styles.blu} onPress={() => navigation.navigate("assets")}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    marginBottom: 32,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    marginLeft: 12,
    fontSize: 16,
    opacity: 0.8,
  },
  notificationButton: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
  },
  balanceContainer: {
    marginBottom: 32,
  },
  balanceLabel: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: "700",
  },
  eyeButton: {
    padding: 8,
  },
  percentageTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#008AC3',
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  percentageText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: "600",
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
    borderColor: '#008AC3', // Fixed the string value
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
