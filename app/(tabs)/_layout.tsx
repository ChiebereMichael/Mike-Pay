import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  const theme = {
    backgroundColor: '#000', // Light background
    tabBarColor: '#000', // Tab bar color in light mode
    activeTintColor: '#ffd33d', // Active tab icon color
    inactiveTintColor: '#333', // Inactive tab icon color
    headerStyle: {
      backgroundColor: '#f0f0f0',
    },
    headerTintColor: '#000',
  };

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#000',
      },
      headerShown: false,
      headerShadowVisible: true,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: theme.tabBarColor, // Apply theme-based background color for the tab bar
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-outline' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
       <Tabs.Screen
        name="Assets"
        options={{
          title: 'My Assets',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'pie-chart-outline' : 'pie-chart-outline'} color={color} size={24} />
          ),
        }}
      />
       <Tabs.Screen
        name="P2p"
        options={{
          title: 'P2p',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'swap-horizontal-outline' : 'swap-horizontal-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Market"
        options={{
          title: 'Market',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'stats-chart-outline' : 'stats-chart-outline'} color={focused ? theme.activeTintColor : theme.inactiveTintColor} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
      name='More'
      options={{
        title:'More',
        tabBarIcon:({color, focused})=>(
          <Ionicons name={focused ? 'ellipsis-horizontal-outline' : 'ellipsis-horizontal-outline'} color={color} size={24}/>
        
        ),
      }}
      />
    </Tabs>
  );
}
