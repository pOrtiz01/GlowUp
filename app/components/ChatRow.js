import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React ,{useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth, db } from '../../firebase';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';

const ChatRow = ({matchDetails}) => {
const navigation= useNavigation();
const [matchedUserInfo,setMatchedUserInfo]=useState(null)

useEffect(() =>{
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users,auth.currentUser.uid))
},[matchDetails,auth]);

  return (
    <TouchableOpacity style={[styles.rowItem,styles.cardShadow]}>
        <Image 
        style={styles.rowImage}
        source={{uri:matchedUserInfo?.photoURL}}
        />

        <View>
            <Text style={styles.rowText}> 
                {matchedUserInfo?.displayName}
            </Text>
            <Text> Say Hi!</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ChatRow

const styles = StyleSheet.create({
    rowItem:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:"2%",
        paddingHorizontal:"5%",
        marginHorizontal:"3%",
        marginVertical:"2%",
        backgroundColor:"white",
        borderRadius:"10%"
    },
    rowImage:{
        borderRadius:9999,
        height:80,
        width:80,
        marginRight:"5%"
    },
    cardShadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:2,
            height:2,
        },
        shadowOpacity:0.2,
        shadowRadius:1.41,

        elevation:2,
    },
    rowText:{
        fontSize:20,
        fontWeight:'500'
    }
})