import { StyleSheet, Text, View, Image, ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from "react-native";
import React from "react";

// Import image
const bitcoin: ImageSourcePropType = require("@/assets/images/btc2.jpg");

interface Theme {
  textColor: string;
  textColor2: string;
  cardBackground: string;
  buttonColor: string;
  iconBackground: string;
  iconColor: string;
}

interface Styles {
  container: ViewStyle;
  flex: ViewStyle;
  flex2: ViewStyle;
  flex3: ViewStyle;
  flex4: ViewStyle;
  flex5: ViewStyle;
  h3: TextStyle;
  btc: TextStyle;
  image: ImageStyle;
  par: TextStyle;
  par1: TextStyle;
}

const BalanceContainer = () => {
  const dark: Theme = {
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
          <View >
            <Text style={[styles.h3, { color: dark.textColor2 }]}>$23.56</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    paddingVertical: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
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
