import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './app/screens/HomePage';
import WelcomeScreen from './app/screens/WelcomeScreen';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
