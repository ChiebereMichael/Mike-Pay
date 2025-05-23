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
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Send Money</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Enter Amount</Text>
          <View style={styles.amountContainer}>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={setValue}
              keyboardType="numeric"
              placeholder="0.00"
              placeholderTextColor="#666"
              maxLength={10}
            />
            <TouchableOpacity style={styles.maxButton}>
              <Text style={styles.maxButtonText}>MAX</Text>
            </TouchableOpacity>
          </View>
        </View>

        <BalanceContainer />

        <TouchableOpacity 
          style={[styles.confirmButton, !value && styles.confirmButtonDisabled]}
          onPress={() => {
            Keyboard.dismiss();
          }}
          disabled={!value}
        >
          <Text style={styles.confirmButtonText}>Confirm Transfer</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default P2p;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  placeholder: {
    width: 40,
  },
  content: {
    marginTop: 24,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
    marginBottom: 16,
  },
  amountContainer: {
    alignItems: "center",
  },
  input: {
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    width: "100%",
    paddingVertical: 8,
  },
  maxButton: {
    backgroundColor: "#008AC3",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 16,
  },
  maxButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  confirmButton: {
    backgroundColor: "#008AC3",
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 32,
    marginTop: "auto",
  },
  confirmButtonDisabled: {
    opacity: 0.5,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
