import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { collection, onSnapshot,query,where } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import ChatRow from './ChatRow';

const ChatList = () => {
    const [matches, setMatches] =useState([]);

    useEffect(() =>
        onSnapshot(query(collection(db,'matches'),where('usersMatched','array-contains',auth.currentUser.uid)), (snapshot) => setMatches(snapshot.docs.map((doc) => ({
            id:doc.id,
            ...doc.data(),
        }))))
    ,[auth])


  return (
    matches.length>0?(
        <FlatList
        style={styles.list}
            data={matches}
            keyExtractor={item =>item.id}
            renderItem={({item}) => <ChatRow matchDetails={item}/>}
        />
    ):(
        <View style={styles.noMatchContainer}>
            <Text style={styles.noMatchText}>No matches at the moment</Text>
        </View>
    )
    
  )
}

export default ChatList

const styles = StyleSheet.create({
    container:{
       
    },
    noMatchContainer:{
        padding:"5%",
    },
    noMatchText:{
        textAlign:'center',
        fontSize:20
    },
    list:{
        height:"100%"
    }
})