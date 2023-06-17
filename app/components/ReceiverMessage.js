import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ReceiverMessage = ({message}) => {
  return (
    <View style={styles.messageContainer}>
        <Image style={styles.messageImage} source={{uri:message.photoURL,}}/>
      <Text style={styles.messageText}>{message.message}</Text>
    </View>
  )
}

export default ReceiverMessage

const styles = StyleSheet.create({
    messageContainer:{
        backgroundColor:"#EF4444",
        borderRadius:12,
        borderTopLeftRadius:0,
        paddingHorizontal:20,
        paddingVertical:15,
        marginHorizontal:15,
        marginVertical:10,
        marginLeft:50,
        alignSelf:"flex-start",
    },
    messageText:{
        color:"white"
    },
    messageImage:{
        height:40,
        width:40,
        borderRadius:40/2,
        position:'absolute',
        top:0,
        left:-50
    }
})