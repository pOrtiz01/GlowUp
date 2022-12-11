import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Pressable } from 'react-native';

function WelcomeScreen(props) {
    return (
        <SafeAreaView style={styles.background}>
            <Pressable style ={styles.registerButton} title = "Register New Account" onPress={()=>console.log("Register Pressed")} >
                <Text style = {styles.text} > Register </Text>
            </Pressable>
            <Pressable style ={styles.loginButton} title = "Login" onPress={()=>console.log("Login Pressed")} >
                <Text style = {styles.text} > Login </Text>
            </Pressable>
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#fed9b7",
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
        backgroundColor: "#00afb9",
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        width: "70%",
        height: 70,
        backgroundColor: "#0081a7",
        marginTop : 20
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
})

export default WelcomeScreen;
