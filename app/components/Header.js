import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import text from "../config/text"

const Header = ({title}) => {
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={text.headerText}>{title}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
  
    },
    headerContainer:{
        marginLeft:"5%"
    },
})

export default Header

