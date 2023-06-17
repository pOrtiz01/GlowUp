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
    backgroundColor:"#f56565",
    paddingTop:".5%",
    opacity:.95
    
  },
  matchImageContainer:{
    justifyContent:"center",
    paddingHorizontal:"5%",
    paddingTop:"30%",
    
  },
  matchText:{
    color:"white",
    textAlign:"center",
    
  },
  ImageContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:"10%"
  },
  profileImage:{
    height:150,
    width:150,
    borderRadius:150/2
  },
  messageButton:{
    backgroundColor:"white",
    margin:"10%",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingTop:"5%",
    paddingBottom:"5%",
    borderRadius:9999,
    marginTop:"20%"
  },
  buttonText:{
    textAlign:"center"
  },
  matchImage:{
    height:"35%",
    width:"100%",
  }
})