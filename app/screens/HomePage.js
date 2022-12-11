import React from 'react';
import { StyleSheet, SafeAreaView, View,Image,Text, Pressable } from 'react-native';
import colors from '../config/colors';
import text from '../config/text';

function HomePage(props) {
    return (
        <SafeAreaView style = {style.container}>
            <View style = {style.cardBackground}>
                <View style = {style.card}>
                    <View style = {style.profileImageBackground}>
                        <Image style = {style.profileImage} source={require('../assets/pablo1.png')}/>
                    </View>
                    <View style={style.textContainer}>
                        <Text style={text.title}>Pablo Ortiz</Text>
                        <Text style={text.subTitle}>Computer Engineer</Text>
                        <Text style={text.normal} >Hello, my name is Pablo, I am a 3rd year computer engineer with an avid passion for software development</Text>
                        <Text style={text.profession}>Bread Acquisition Specialist</Text>
                    </View>
                </View>
            </View>
            <View style = {style.actions}>
                <Pressable style ={style.reject} title = "Reject" onPress={()=>console.log("Reject Pressed")} ></Pressable>
                <Pressable style ={style.accept} title = "Accept" onPress={()=>console.log("Accept Pressed")} ></Pressable>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor : colors.background1,
        justifyContent: "space-evenly",
        alignItems: "center",

    },
    card:{
        height: "98%",
        width : "100%",
        backgroundColor: colors.primary,
        borderRadius: 20,
        justifyContent: "flex-start",
        alignItems:"center"
    },
    cardBackground:{
        height:"65%",
        width: "70%",
        backgroundColor: colors.accent,
        borderRadius:20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    profileImage:{
        height: 150,
        width: 150,
        borderRadius: 150/2,
        overflow:"hidden",
    },
    profileImageBackground:{
        height: 160,
        width: 160,
        borderRadius: 160/2,
        backgroundColor:colors.accent,
        justifyContent: "center",
        alignItems: "center",
        top:"10%"
    },
    textContainer:{
        height:"40%",
        width: "80%",
        justifyContent: "flex-start",
        alignItems: "center",
        top: "12%"
    },
    actions:{
        width : "70%",
        height: 75,
        bottom: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center"
    },
    accept:{
        height: 75,
        width: 75,
        borderRadius: 75/2,
        backgroundColor: 'green',

    },
    reject:{
        height: 75,
        width: 75,
        borderRadius: 75/2,
        backgroundColor: 'red',
    }
})
export default HomePage;