import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { auth} from '../../firebase';
import {updateProfile} from 'firebase/auth'
import {setDoc,doc, serverTimestamp} from "firebase/firestore";
import {db} from "../../firebase"
import { useNavigation } from '@react-navigation/native';

const ModalScreen = () => {
    const [image, setImage]=useState(null);
    const [job, setJob]=useState(null);
    const [age, setAge]=useState(null);
    const [first, setFirst]=useState(null);
    const [last, setLast]=useState(null);
    const navigation = useNavigation();
    const incompleteForm =!image || !job || !age || !first || !last;


    const updateAuthProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: first,
            photoURL: image
        }).then(() =>{
            console.log("Updated Auth Profile")
        }).catch((error) =>{
            console.log(error)
        })
    };

    const updateUserProfile = () => {
        setDoc(doc(db,'users',auth.currentUser.uid),{
            id:auth.currentUser.uid,
            displayName: first,
            photoURL:image,
            job:job,
            age:age,
            timestamp: serverTimestamp()
        }).then(() => {
            console.log("Updated User Profile")
            navigation.navigate('Home')
        }).catch(error => {
            alert(error.message);
        });
    };
    
    const updateProfiles = () => {
        console.log("Called");
        updateAuthProfile();
        updateUserProfile();
        console.log(auth.currentUser);

    }
    return (
    <View style={styles.container}>
        <Image style={styles.modalImage} resizeMode="contain" source={{uri: "https://links.papareact.com/2pf"}}/>
    
    <Text style={styles.welcomeText}>
        Welcome!
    </Text>
    
    <Text style={styles.stepText}>
        Step 1: First Name
    </Text>
    <TextInput
        value={first}
        onChangeText={text =>setFirst(text)}
        style={styles.textInput}
        placeholder='Enter your First Name'
    />

    <Text style={styles.stepText}>
        Step 2: Last Name
    </Text>
    <TextInput
        value={last}
        onChangeText={text =>setLast(text)}
        style={styles.textInput}
        placeholder='Enter your Last Name'
    />

    <Text style={styles.stepText}>
        Step 3: Profile Picture
    </Text>
    <TextInput
        value={image}
        onChangeText={text =>setImage(text)}
        style={styles.textInput}
        placeholder='Enter Profile Picture URL'
    />

    <Text style={styles.stepText}>
        Step 4: The Job
    </Text>
    <TextInput
        value={job}
        onChangeText={text =>setJob(text)}
        style={styles.textInput}
        placeholder='Enter your occupation'
    />

    <Text style={styles.stepText}>
        Step 5: The Age
    </Text>
    <TextInput
        value={age}
        onChangeText={text =>setAge(text)}
        style={styles.textInput}
        placeholder='Enter your age'
        maxLength={2}
        keyboardType='numeric'
    />



    <TouchableOpacity onPress={updateProfiles} style={[styles.button,incompleteForm ? {backgroundColor:"gray"} : {backgroundColor:"red"}]} disabled={incompleteForm}>
        <Text style={styles.buttonText}>Update Profile</Text>
    </TouchableOpacity>

    </View>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:1
    },
    modalImage:{
        height:100,
        width:"100%"
    },
    welcomeText:{
        color:"gray",
        fontWeight:"bold",
        padding:4,
        fontSize:25
    },
    stepText:{
        textAlign:"center",
        padding:8,
        fontWeight:"bold",
        color:"red",
        opacity:.7
    },
    textInput:{
        textAlign:'center',
        fontSize:20,
        padding:4
    },
    button:{
        width:"60%",
        padding:20,
        borderRadius:30/2,
        position:"absolute",
        bottom:60,

        opacity:.6
    },
    buttonText:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        opacity:.9
    }
})