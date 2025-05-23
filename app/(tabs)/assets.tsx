import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React,{useState} from 'react'
import { Ionicons } from "@expo/vector-icons";
import MyAssets from '@/components/MyAssets';

const Assets = () => {
  const price = '$12,550.50';
  const [showBalance, setShowBalance] = useState(true);  //show balance
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#008AC3', '#006091']}
        style={styles.header}
      >
        <SafeAreaView>
          <Text style={styles.headerTitle}>Portfolio Balance</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>
              {showBalance ? price : '****'}
            </Text>
            <TouchableOpacity 
              style={styles.eyeButton}
              onPress={() => setShowBalance(!showBalance)}
            >
              <Ionicons name={showBalance ? "eye" : "eye-off"} size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View style={styles.percentageContainer}>
            <Ionicons name="arrow-up" size={16} color="#fff" />
            <Text style={styles.percentageText}>10.75%</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <MyAssets/>
    </View>
  )
}

export default Assets

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  headerTitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    marginTop: 60,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  balanceText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  eyeButton: {
    padding: 8,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 16,
  },
  percentageText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: '600',
  },
})