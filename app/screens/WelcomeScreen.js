import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Pressable } from 'react-native';

import text from '../config/text';
import colors from '../config/colors';
function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style ={styles.registerButton} title = "Register New Account" onPress={()=>console.log("Register Pressed")} >
                <Text style = {text.buttonText} > Register </Text>
            </Pressable>
            <Pressable style ={styles.loginButton} title = "Login" onPress={()=>console.log("Login Pressed")} >
                <Text style = {text.buttonText} > Login </Text>
            </Pressable>
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        width: "70%",
        height: 70,
        backgroundColor: colors.primary,
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        width: "70%",
        height: 70,
        backgroundColor: colors.secondary,
        marginTop : 20
    },
})

export default WelcomeScreen;
