import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Pressable,Image } from 'react-native';

import text from '../config/text';
import colors from '../config/colors';
//import useAuth from '../hooks/useAuth';
const WelcomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            
            <View style= {styles.pressableItems}>
                <Pressable style ={styles.registerButton} title = "Register New Account" onPress={()=>console.log("Register Pressed")} >
                    <Text style = {text.buttonText} > Register </Text>
                </Pressable>
                <Pressable style ={styles.loginButton} title = "Login" onPress={()=>console.log("Login Pressed")} >
                    <Text style = {text.buttonText} > Login </Text>
                </Pressable>
            </View>
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    logo:{
        height: 150,
        width: 150,
    },
    logoContainer:{
        height:"50%",
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%"
    },
    pressableItems:{
        alignItems: 'center',
        justifyContent: 'center',
        height:"50%"
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        width: 140,
        height: 70,
        backgroundColor: colors.primary,
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        width: 140,
        height: 70,
        backgroundColor: colors.secondary,
        marginTop : 20
    },
})

export default WelcomeScreen;
