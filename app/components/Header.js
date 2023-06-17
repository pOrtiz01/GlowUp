import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import text from "../config/text"

const Header = ({title,callEnabled}) => {
    const navigation =useNavigation();
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
                <Image style={styles.backArrowImage} source={require('../assets/backNavigate.png')}/>
            </TouchableOpacity>
            <Text style={text.headerText}>{title}</Text>
        </View>

        {callEnabled && (
            <TouchableOpacity style={styles.phoneContainer}>
                <Image style={styles.callImage} source={require('../assets/phoneImage.png')}/>
            </TouchableOpacity>
        )}

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:'2%',
        display:'flex'
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexDirection:'row',
    },
    backArrow:{
        padding:'2%',
        marginRight:"10%"
    },
    backArrowImage:{
        height:40,
        width:40
    },
    phoneContainer:{
        borderRadius:9999,
        marginRight:"5%",
        padding:"3%",
        backgroundColor:"#FED7D7",
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },
    callImage:{
        height:"70%",
        width:"70%"
    }
})

export default Header

