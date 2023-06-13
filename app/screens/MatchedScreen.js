import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'

const MatchedScreen = () => {
  const navigation = useNavigation();
  const {params} =useRoute();

  const {loggedInProfile, userSwiped}=params;

  return (
    <View style={styles.container}>
      <View style={styles.matchImageContainer}>
        <Image 
        style={styles.matchImage}
        source={{uri:"https://links.papareact.com/mg9"}}/>
      </View>
      <Text style={styles.matchText}>
        You and {userSwiped.displayName} have liked each other.
      </Text>
      <View style={styles.ImageContainer}>
        <Image 
          style={styles.profileImage}
          source={{
            uri:loggedInProfile.photoURL,
          }}
        />
        <Image 
          style={styles.profileImage}
          source={{
            uri:userSwiped.photoURL,
          }}
        />
      </View>

      <TouchableOpacity style={styles.messageButton}
      onPress={() =>{
        navigation.goBack();
        navigation.navigate("Chat");
      }}>
          <Text style={styles.buttonText}>Send a Message</Text>
      </TouchableOpacity>

    </View>
  )
}

export default MatchedScreen

const styles = StyleSheet.create({
  container:{
    height:"100%",
    backgroundColor:"red",
    opacity:.8,
    padding:60
  },
  matchImageContainer:{
    justifyContent:"center",
    paddingHorizontal:60,
    paddingTop:40
  },
  matchText:{
    color:"white",
    textAlign:"center",
    marginTop:10
  },
  ImageContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:10
  },
  profileImage:{
    height:64,
    width:64,
    borderRadius:64/2
  },
  messageButton:{
    backgroundColor:"white",
    margin:10,
    paddingHorizontal:20,
    paddingVertical:16,
    borderRadius:16/2,
    marginTop:40
  },
  buttonText:{
    textAlign:"center"
  },
  matchImage:{
    height:40,
    width:"100%",
  }
})