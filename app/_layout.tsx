import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView ,SafeAreaProvider } from 'react-native-safe-area-context';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function RootLayout() {
  // const insets = useSafeAreaInsets();
  return (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <StatusBar style="auto"  />
        </Stack>
  );
}

