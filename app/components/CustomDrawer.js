import { StyleSheet, Text, View } from 'react-native'
import { useNavigation} from '@react-navigation/native';
import React from 'react'
import { auth } from '../../firebase';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props) => {

    const navigation = useNavigation();

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
    <View style={styles.drawerContainer}>
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>{}} style={styles.signoutButton}>
                <View style={styles.footerButtonsContainer}>
                    <Ionicons name="share-social-outline" size={22}/>
                    <Text style={styles.footerText}>Share This App!</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={handleSignout} style={styles.signoutButton}>
                <View style={styles.footerButtonsContainer}>
                    <Ionicons name="exit-outline" size={22}/>
                    <Text style={styles.footerText}>Signout</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>


  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawerContainer:{
        flex:1
    },
    footerContainer:{
        padding:20,
        borderTopWidth:1,
        borderTopColor:"#ccc"
    },
    footerButtonsContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    signoutButton:{
        paddingVertical:15
    },
    footerText:{
        fontSize:15,
        marginLeft:5,
        fontWeight:"bold"
    }
})