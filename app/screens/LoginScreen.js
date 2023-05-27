import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../config/colors';
import text from '../config/text';
import { auth } from '../../firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigation= useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    },[])

    const handleSignup = () =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            const user =userCredentials.user;
            console.log('Registered with:', user.email);
        })
        .catch(error=>alert(error.message))
    }

    const handleLogin = () =>{
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            const user =userCredentials.user;
            console.log('Logged in with: ',user.email);
        })
        .catch(error=>alert(error.message))
    }
  return (
    <KeyboardAvoidingView style={styles.container}
    behaviour="padding">
        <ImageBackground 
        resizeMode="cover"
        style={styles.backgroundImage} 
        source={{uri: "https://tinder.com/static/tinder.png"}}> 
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={[styles.button]}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignup}
                    style={[styles.button,styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>


    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inputContainer:{
        width:'80%',
        marginTop:40
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:10,
        marginTop: 5,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'cernter',
        marginTop: 40,
    },
    button:{
        backgroundColor: colors.primary,
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems: 'center',
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop:5,
        borderColor:colors.primary,
        borderWidth:2,
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize:16,
    },
    buttonOutlineText:{
        color: colors.primary,
        fontWeight: '700',
        fontSize:16,
    },
    backgroundImage:{
        flex:1,
        justifyContent: 'flex-top',
        alignItems: 'center',
    }

})