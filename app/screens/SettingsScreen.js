import { SafeAreaView,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import text from "../config/text"
import Header from '../components/Header'
import { db,auth } from '../../firebase';
import { collection, getDocs,deleteDoc } from 'firebase/firestore';

const SettingsScreen = () => {
  const myPassesCollectionRef = collection(db, 'users',auth.currentUser.uid,'passes')
  const mySwipesCollectionRef = collection(db, 'users',auth.currentUser.uid,'swipes')
  const myMatchesCollectionRef = collection(db,'matches')
  const resetTestData= async ()=>{
  
    try {
      const passQuerySnapshot = await getDocs(myPassesCollectionRef);
      const swipeQuerySnapshot = await getDocs(mySwipesCollectionRef)
      const matchesQuerySnapshot = await getDocs(myMatchesCollectionRef)

      const deletePromises = [];
      const saveIds = []

      for (const doc of passQuerySnapshot.docs) {
        deletePromises.push(deleteDoc(doc.ref));
        saveIds.push(doc.id)
      }

      for (const doc of swipeQuerySnapshot.docs) {
        deletePromises.push(deleteDoc(doc.ref));
        saveIds.push(doc.id)
      }
   
      for (const doc of matchesQuerySnapshot.docs) {
        deletePromises.push(deleteDoc(doc.ref));
      }
      
      for (const id of saveIds){
        const passQuerySnapshotReverse = await getDocs(collection(db, 'users',id,'passes'));
        const swipeQuerySnapshotReverse = await getDocs(collection(db, 'users',id,'swipes'));
        console.log("Deleting for "+id)
        for (const doc of passQuerySnapshotReverse.docs) {
          deletePromises.push(deleteDoc(doc.ref));
        }
  
        for (const doc of swipeQuerySnapshotReverse.docs) {
          deletePromises.push(deleteDoc(doc.ref));
        }
      }

      await Promise.all(deletePromises);
  
      console.log('All user related match records deleted');
    } catch (error) {
      console.error('Error deleting documents:', error);
    }
  }
  


  return (
    <SafeAreaView>
      <Header title="Settings" />
      <TouchableOpacity style={styles.rowItem} onPress={resetTestData}>
        <Text style={styles.rowText}>Reset Test Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container:{
    
  },
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
rowText:{
  fontSize:20,
  fontWeight:'500'
}

})