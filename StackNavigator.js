import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import WelcomeScreen from "./app/screens/WelcomeScreen"
import HomePage from "./app/screens/HomePage"
import ChatScreen from "./app/screens/ChatScreen"
import LoginScreen from "./app/screens/LoginScreen"
import HomeScreen from "./app/screens/HomeScreen"
import ModalScreen from './app/screens/ModalScreen';
import MatchedScreen from './app/screens/MatchedScreen';
import MessageScreen from './app/screens/MessageScreen';

const Stack = createNativeStackNavigator();

function StackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen}/>
                <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}/>
                <Stack.Screen options={{headerShown:false}} name="Chat" component={ChatScreen}/>
                <Stack.Screen options={{headerShown:false}} name="Message" component={MessageScreen}/>
                <Stack.Screen options={{headerShown:false}} name="Cards" component={HomePage}/>
            </Stack.Group>
            
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen options={{headerShown:false}} name="Modal" component={ModalScreen}/>
            </Stack.Group>
           
            <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
                <Stack.Screen options={{headerShown:false}} name="Match" component={MatchedScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default StackNavigator;