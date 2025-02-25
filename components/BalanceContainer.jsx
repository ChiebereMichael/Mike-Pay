import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import { Ionicons } from "@expo/vector-icons";
const bitcoin = require("@/assets/images/btc2.jpg");

const BalanceContainer = () => {
  const dark = {
    textColor: "#fff",
    textColor2: "darkgray",
    cardBackground: "#f4f4f4",
    buttonColor: "#fff",
    iconBackground: "#008AC3",
    iconColor: "#ffffff",
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.flex2}>
          <Image source={bitcoin} style={styles.image} />
          <View style={styles.flex3}>
            <Text style={[styles.par, { color: dark.textColor }]}>BTC</Text>
            <Text style={[styles.par1, { color: dark.textColor }]}>
              Bitcoin
            </Text>
          </View>
        </View>
        <View style={styles.flex4}>
          <Text style={[styles.btc, { color: dark.textColor }]}>
            $0.0000013
          </Text>
          <View style={styles.flex5}>
            <Text style={[styles.h3, { color: dark.textColor2 }]}>$23.56</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    backgroundColor: '#282828',
    paddingVertical: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  flex: {
    display: "flex",
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex2: { display: "flex", flexDirection: "row", alignItems: "center" },
  flex3: { flexDirection: "column" },
  flex4: { flexDirection: "column", alignItems: "flex-end" },
  h3: { fontSize: 14, marginLeft: 5 },
  btc: { fontSize: 15, fontWeight: "bold" },
  image: { width: 35, height: 35, borderRadius: 50, marginRight: 10 },
  par: { fontSize: 20, fontWeight: "400" },
  par1: { fontSize: 15, color: "gray" },
});

export default BalanceContainer;
