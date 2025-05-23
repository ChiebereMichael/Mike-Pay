import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from 'expo-router'

interface NotificationItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  message: string;
  time: string;
  type: 'success' | 'alert' | 'warning';
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, title, message, time, type }) => (
  <View style={styles.notificationItem}>
    <View style={[styles.iconContainer, { backgroundColor: type === 'success' ? '#008AC3' : '#333' }]}>
      <Ionicons name={icon} size={24} color="#fff" />
    </View>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationMessage}>{message}</Text>
      <Text style={styles.notificationTime}>{time}</Text>
    </View>
  </View>
);

const More = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Today</Text>
        <NotificationItem 
          icon="wallet" 
          title="Payment Successful"
          message="Your payment of $500 has been processed"
          time="2 hours ago"
          type="success"
        />
        <NotificationItem 
          icon="stats-chart" 
          title="Price Alert"
          message="BTC is up 5% in the last hour"
          time="5 hours ago"
          type="alert"
        />
        
        <Text style={styles.sectionTitle}>Yesterday</Text>
        <NotificationItem 
          icon="arrow-down" 
          title="Funds Received"
          message="You received 0.05 BTC from John"
          time="1 day ago"
          type="success"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default More

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#666',
    fontSize: 14,
    marginVertical: 16,
    textTransform: 'uppercase',
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#111',
    borderRadius: 12,
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  notificationMessage: {
    color: '#999',
    fontSize: 14,
    marginBottom: 8,
  },
  notificationTime: {
    color: '#666',
    fontSize: 12,
  },
})