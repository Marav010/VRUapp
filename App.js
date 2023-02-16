import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VruMenu from './navigations/VruMenu';
import HomeIconMenu from './screens/HomeMenu';


export default function App() {
  return (
    <NavigationContainer>
      <VruMenu />
    </NavigationContainer>
  );
}


