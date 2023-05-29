import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {React,useRef} from 'react'
import colors from '../config/colors';
import { auth } from '../../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from "react-native-deck-swiper"

const HomeScreen = () => {
    const DUMMY_DATA = [
        {
            firstName:"Pablo",
            lastName:"Ortiz",
            job:"CGO",
            photoURL:"https://media.licdn.com/dms/image/C4D03AQEsgtRX1UezZw/profile-displayphoto-shrink_200_200/0/1617661535545?e=1690416000&v=beta&t=7PPv94uQMaRnMjPqKK680t3O9dS4BygPkYLBvZLe9B0",
            age:22,
            id:1
        },
        {
            firstName:"Mark",
            lastName:"Uszkay",
            job:"CLO",
            photoURL:"https://media.licdn.com/dms/image/D5603AQFJQjkoBKjLmg/profile-displayphoto-shrink_200_200/0/1682873089512?e=1690416000&v=beta&t=-5gFvOYssvrMq921aNf8JraVYPqBrBC-dsFhYT9BVzE",
            age:2,
            id:2
        },
        {
            firstName:"Wes",
            lastName:"Nicholson",
            job:"CCO",
            photoURL:"https://media.licdn.com/dms/image/C5603AQEQXj_w3N8hbA/profile-displayphoto-shrink_200_200/0/1632797932819?e=1690416000&v=beta&t=b0v77uNQHWYmfTQ7Xel-0z5nEVKbkQi21lRJeBEATXM",
            age:30,
            id:3
        }
    ];
    const navigation = useNavigation()
    const swipeRef=useRef(null);

    const handleSignout = () =>{
        auth
        .signOut()
        .then(() =>{
            navigation.replace("Login")
            console.log('Signed out')
        })
        .catch(error => alert(error.message))
    }
    auth.currentUser.photoURL="https://media.licdn.com/dms/image/C4D03AQEsgtRX1UezZw/profile-displayphoto-shrink_200_200/0/1617661535545?e=1690416000&v=beta&t=7PPv94uQMaRnMjPqKK680t3O9dS4BygPkYLBvZLe9B0"
    return (
    <SafeAreaView style = {styles.container}>
        {/*Header*/}
        <View style={styles.header}>
            <TouchableOpacity style = {styles.profilePhotoContainer} onPress={handleSignout}>
                <Image style={styles.profilePhoto} source={{uri:auth.currentUser.photoURL}}/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image style={styles.appLogo} source={require('../assets/TinderLogo.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.chatLogoContainer} onPress={() => navigation.navigate('Chat')}>
                <Image style={styles.chatLogo} source={require('../assets/chatLogo.png')}/>
            </TouchableOpacity>
        </View>
        {/*End of Header*/}

        {/*Cards*/}
        <View style={styles.cardsContainer}>
            <Swiper 
                ref={swipeRef}
                containerStyle={{backgroundColor: "transparent"}}
                cards={DUMMY_DATA}
                stackSize={5}
                cardIndex={0}
                animateCardOpacity
                verticalSwipe={false}
                onSwipedLeft={() => {
                    console.log('Swipe No')
                }}
                onSwipedRight={() => {
                    console.log('Swipe Yes')
                }}

                overlayLabels={{
                    left:{
                        title: "NO",
                        style:{
                            label:{
                                textAlign: "right",
                                color:"red"
                            },
                        },
                    },
                    right:{
                        title: "YES",
                        style:{
                            label:{
                                color:"green"
                            },
                        },
                    },

                }}
                renderCard={(card) => (
                    <View 
                    key={card.id} 
                    style={styles.card}
                    >
                        <Image 
                        style={styles.cardImage} 
                        source={{uri:card.photoURL}}
                        />
                   
                        <View style={[styles.cardFooterContainer,styles.shadow]}> 
                            <View> 
                                <Text style={styles.nameText}>{card.firstName} {card.lastName}</Text>
                                <Text>{card.job}</Text>
                            </View>
                            <Text style={styles.ageText}>{card.age}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
        {/*End of Cards*/}
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            style={styles.footerNoContainer}
            onPress={() => swipeRef.current.swipeRight()}
            >
                <Image style={styles.footerImage} source={require('../assets/closed.png')}/>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.footerYesContainer}
            onPress={() => swipeRef.current.swipeLeft()}
            >
                <Image style={styles.footerImage} source={require('../assets/checked.png')}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems:'center'
    },
    button:{
        backgroundColor: colors.primary,
        width:'60%',
        padding:15,
        borderRadius:10,
        alignItems: 'center',
        marginTop:40
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize:16,
    },
    profilePhoto:{
        height:50,
        width:50,
        borderRadius: 50/2,
        overflow:"hidden",
    },
    profilePhotoContainer:{
        left:15,
        top:3,
        position:'absolute'
    },
    appLogo:{
        height:50,
        width:50
    },
    header:{
        alignItems:'center',
        position:'relative'
    },
    chatLogo:{
        resizeMode:'contain',
        height:50,
        width:50,
   
    },
    chatLogoContainer:{
        position:"absolute",
        right:15,
        top:3
    },
    cardsContainer:{
        flex:1,
        marginTop:-6,
        height:"75%"
    },
    card:{
        backgroundColor:"white",
        height: "75%",
        borderRadius: 50/2,
        position:"relative"
    },
    cardImage:{
        height:"100%",
        width:"100%",
        position:"absolute",
        top:0,
        borderRadius:50/2

    },
    cardFooterContainer:{
        backgroundColor:"white",
        width:"100%",
        height:80,
        position:"absolute",
        bottom:0,
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:10,
        justifyContent: 'space-between',
        borderBottomLeftRadius: 50/2, 
        borderBottomRightRadius: 50/2, 
        overflow: 'hidden',
      
    },
    shadow:{
        shadowColor:"red",
        shadowOffset:{
            width:0,
            height:5,
        },
        shadowOpacity:.2,
        shadowRadius:1.41,
        elevation:2,
    },
    nameText:{
        fontSize:20,
        fontWeight:"bold"
    },
    ageText:{
        fontSize:30,
        fontWeight:"bold"
    },
    footerContainer:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        height:"15%",
        alignItems:"flex-end"
    },
    footerImage:{
        height: "60%",
        width:"60%",

    },
    footerNoContainer:{
        height: 80,
        width:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:80/2,
        backgroundColor:"red",
        opacity:.7
    },
    footerYesContainer:{
        height: 80,
        width:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:80/2,
        backgroundColor:"green",
        opacity:.7
    }
})