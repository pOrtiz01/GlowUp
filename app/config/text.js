import { StyleSheet } from "react-native";
import colors from '../config/colors';

export default StyleSheet.create({
    normal: {
        fontSize: 16,
        letterSpacing: 0.25,
        color: 'white',
        textAlign: 'center',
        paddingTop: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 0.40,
        color: 'white',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.30,
        color: 'white',
        textAlign: 'center'
    },
    profession: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.40,
        color: colors.background2,
        textAlign: 'center',
        top: 30
    },
    buttonText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});