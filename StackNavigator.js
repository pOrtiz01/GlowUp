import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import CustomDrawer from './app/components/CustomDrawer';
import ChatScreen from "./app/screens/ChatScreen"
import LoginScreen from "./app/screens/LoginScreen"
import HomeScreen from "./app/screens/HomeScreen"
import ModalScreen from './app/screens/ModalScreen';
import MatchedScreen from './app/screens/MatchedScreen';
import MessageScreen from './app/screens/MessageScreen';
import SettingsScreen from './app/screens/SettingsScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator(){
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} >
            <Drawer.Screen options={{drawerActiveBackgroundColor:"#aa18ea",drawerActiveTintColor:"#fff",drawerInactiveTintColor:"#333",drawerLabelStyle:{marginLeft:-25,fontSize:15,fontWeight:"bold"},headerShown:false,drawerLabel: 'Home',drawerIcon:({color}) => (<Ionicons name="home-outline" size={22} color={color}/>)}} name="HomePage" component={HomeScreen} />
            <Drawer.Screen options={{drawerActiveBackgroundColor:"#aa18ea",drawerActiveTintColor:"#fff",drawerInactiveTintColor:"#333",drawerLabelStyle:{marginLeft:-25,fontSize:15,fontWeight:"bold"},headerShown:false,drawerIcon:({color}) => (<Ionicons name="person-outline" size={22} color={color}/>)}} name="Profile" component={ModalScreen} />
            <Drawer.Screen options={{drawerActiveBackgroundColor:"#aa18ea",drawerActiveTintColor:"#fff",drawerInactiveTintColor:"#333",drawerLabelStyle:{marginLeft:-25,fontSize:15,fontWeight:"bold"},headerShown:false,drawerIcon:({color}) => (<Ionicons name="settings-outline" size={22} color={color}/>)}} name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

function StackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen}/>
                <Stack.Screen options={{headerShown:false}} name="Home" component={DrawerNavigator}/>
                <Stack.Screen options={{headerShown:false}} name="Chat" component={ChatScreen}/>
                <Stack.Screen options={{headerShown:false}} name="Message" component={MessageScreen}/>
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