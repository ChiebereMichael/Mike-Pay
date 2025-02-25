import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import CryptoPrice from "@/components/Card";
import BalanceContainer from "@/components/BalanceContainer";

const P2p = () => {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.h2}>Send</Text>
        </View>
        <Text style={styles.label}>Enter Amount</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            // onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={setValue}
            keyboardType="numeric" // This shows the numeric keyboard
            placeholder="50"
            maxLength={10} // Optional: limit input length
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Max</Text>
        </TouchableOpacity>
        <BalanceContainer />
        <TouchableOpacity style={styles.button2}  onPress={() => {Keyboard.dismiss();}}>
          <Text style={styles.text2}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default P2p;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#000",
    height: "100%",
  },
  header: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    justifyContent: "center",
  },
  back: {
    right: 150,
  },
  h2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  icon: {
    color: "white",
  },
  label: {
    fontSize: 18,
    color: "#fff",
    paddingTop: 10,
  },
  form: {
    paddingVertical: 10,
    paddingTop: 20,
  },
  input: {
    height: 40,
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: "#008AC3",
    backgroundColor: "#008AC3",
    alignSelf: "center",
    alignItems: "flex-start",
    marginBottom: 20,
    marginTop: 10,
  },
  button2: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: "98%",
    paddingVertical: 20,
    borderColor: "#008AC3",
    backgroundColor: "#008AC3",
    alignItems: "center",
    marginTop: 150,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
