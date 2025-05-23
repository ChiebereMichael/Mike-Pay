import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Charts from "@/components/Charts";
import { useNavigation } from "expo-router";

const btc = require("@/assets/images/btc2.jpg");

const marketStats = [
  { label: "POPULARITY", value: "#1", icon: "star-outline" },
  { label: "MARKET CAP", value: "$832.4B", icon: "analytics-outline" },
  { label: "24H VOL", value: "$60.2B", icon: "stats-chart" }
] as const;

const Market = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={btc} style={styles.btc} />
          <View>
            <Text style={styles.bit}>Bitcoin</Text>
            <Text style={styles.symbol}>BTC</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="star-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Animated.View 
        style={[
          styles.priceContainer, 
          { 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <Text style={styles.bal}>$12,550.50</Text>
        <View style={styles.per}>
          <Ionicons name="arrow-up" size={18} color="#fff" />
          <Text style={styles.percentText}>11.75%</Text>
          <Text style={styles.timeframe}>24h</Text>
        </View>
      </Animated.View>

      <View style={styles.statsContainer}>
        {marketStats.map((item, index) => (
          <View key={index} style={styles.statCard}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={20} color="#008AC3" />
            </View>
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.line} />
        <Charts />
        <View style={styles.minMaxContainer}>
          <Text style={styles.h2}>MIN $86.21</Text>
          <Text style={styles.h2}>MAX $137.88</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 20,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
  },
  actionButton: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
  },
  h2:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btc: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bit: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  symbol: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
  priceContainer: {
    marginBottom: 24,
  },
  bal: {
    fontSize: 42,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  per: {
    flexDirection: "row",
    backgroundColor: "#008AC3",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: "center",
  },
  percentText: {
    color: "#fff",
    marginLeft: 4,
    fontWeight: "600",
  },
  timeframe: {
    color: 'rgba(255,255,255,0.6)',
    marginLeft: 4,
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    margin: 4,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(0,138,195,0.1)',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  statLabel: {
    color: 'gray',
    fontSize: 12,
  },
  chartContainer: {
    flex: 1,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 24,
  },
  minMaxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});