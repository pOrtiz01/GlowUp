import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard, FlatList } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth, db } from '../../firebase';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';
import { useRoute } from '@react-navigation/native';
import SenderMessage from '../components/SenderMessage';
import ReceiverMessage from '../components/ReceiverMessage';
import { addDoc, collection, onSnapshot, serverTimestamp,query,orderBy } from 'firebase/firestore';

const MessageScreen = () => {
    const {params} = useRoute();
    const {matchDetails}=params;
    const [input,setInput] = useState('')
    const [messages, setMessages] =useState([])

    useEffect(() =>onSnapshot(
            query(
                collection(db,'matches',matchDetails.id,'messages'),
                orderBy('timestamp','desc')
                ),
                (snapshot)=>
                    setMessages(snapshot.docs.map((doc) => ({
            id:doc.id,
            ...doc.data(),
        })))
      ),
    [matchDetails,db]);

    const sendMessage = () =>{
        
        addDoc(collection(db,'matches',matchDetails.id,'messages'),{
            timestamp:serverTimestamp(),
            userId:auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: matchDetails.users[auth.currentUser.uid].photoURL,
            message:input
        });

        setInput("");
    }
    
  return (
    <SafeAreaView style={styles.container}>
        <Header title={getMatchedUserInfo(matchDetails?.users,auth.currentUser.uid).displayName} callEnabled/>
        
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.screenContainer} keyboardVerticalOffset={10}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <FlatList data={messages} inverted={-1} style={styles.messageList} keyExtractor={(item)=>item.id} renderItem={({item:message}) =>
                    message.userId === auth.currentUser.uid ? (
                        <SenderMessage key={message.id} message={message}/>
                    ) : (
                        <ReceiverMessage key={message.id} message={message}/> 
                    )
            }
            />
            </TouchableWithoutFeedback>
       
            <View style = {styles.inputTextContainer}>
                <TextInput style={styles.inputText} placeholder='Send Message...' onChangeText={setInput} onSubmitEditing={sendMessage} value={input}/>
                <Button onPress={sendMessage} title='Send' color="#FF5864"/>
            </View>
        </KeyboardAvoidingView>

       

    </SafeAreaView>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
    inputText:{
        height:80,
        fontSize:20,
        
    },
    inputTextContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopWidth: 1,
        borderTopColor: "#E5E7EB",
        paddingHorizontal: 20,
        paddingVertical:5,
        
        
    },
    screenContainer:{
        flex:1
    },
    container:{
        flex:1
    },
    messageList:{
        paddingLeft:15
    }
})