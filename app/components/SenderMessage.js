import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SenderMessage = ({message}) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{message.message}</Text>
    </View>
  )
}

export default SenderMessage

const styles = StyleSheet.create({
    messageContainer:{
        backgroundColor:"#7C3AED",
        borderRadius:12,
        borderTopRightRadius:0,
        paddingHorizontal:20,
        paddingVertical:15,
        marginHorizontal:15,
        marginVertical:10,
        alignSelf:"flex-start",
        marginLeft:"auto"
    },
    messageText:{
        color:"white"
    }
})