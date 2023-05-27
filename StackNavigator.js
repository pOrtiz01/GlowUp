import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import WelcomeScreen from "./app/screens/WelcomeScreen"
import HomePage from "./app/screens/HomePage"
import ChatScreen from "./app/screens/ChatScreen"
import LoginScreen from "./app/screens/LoginScreen"
import HomeScreen from "./app/screens/HomeScreen"

const Stack = createNativeStackNavigator();

function StackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen}/>
            <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}/>
            <Stack.Screen  name="Chat" component={ChatScreen}/>
            <Stack.Screen options={{headerShown:false}} name="Cards" component={HomePage}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;