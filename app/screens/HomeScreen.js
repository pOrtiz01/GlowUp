import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import colors from '../config/colors';
import { auth } from '../../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const navigation = useNavigation()

    const handleSignout = () =>{
        auth
        .signOut()
        .then(() =>{
            navigation.replace("Login")
            console.log('Signed out')
        })
        .catch(error => alert(error.message))
    }

    return (
    <SafeAreaView style = {styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity 
        onPress={handleSignout}
        style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={() => navigation.navigate('Chat')}
        style={styles.button}>
            <Text style={styles.buttonText}>Chat Screen</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor: colors.primary,
        width:'60%',
        padding:15,
        borderRadius:10,
        alignItems: 'center',
        marginTop:40
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize:16,
    },
})