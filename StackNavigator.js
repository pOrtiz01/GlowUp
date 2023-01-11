import { createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react';
import WelcomeScreen from "./app/screens/WelcomeScreen"
import HomePage from "./app/screens/HomePage"
import ChatScreen from "./app/screens/ChatScreen"

const Stack = createNativeStackNavigator();

function StackNavigator(props) {
    const user = false;
    return (
        <Stack.Navigator>
            {user ? (
            <>
                <Stack.Screen name="HomePage" component={HomePage}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
            </>
            ):(
                <Stack.Screen name="Login" component={WelcomeScreen}/>
            )}
        </Stack.Navigator>
    );
}

export default StackNavigator;