import { View, Text, StyleSheet, Image, ScrollView,Button,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm'
import MenuItems  from './ScrollViewComponent'
import Welcome from './Image'



const App = () => {
  const GetRandomName=()=>{

    let names=Math.random();
   setName(names)
  }
  const[Name,setName]=useState("")
  return (
    <ScrollView>
    <View style = {styles.container }>
    <ImageBackground 
                style={styles.image}
                resizeMode="contain"
    source={require('./Image/backgorund .jpg')}>
    
      <Text style={styles.label}
      numberOfLines={1} >{Name}</Text>
      <Button title='enter name' onPress={()=>GetRandomName("")}></Button>
      <Button title='reset' onPress={()=>setName("")}></Button>
      </ImageBackground>
    </View>
   
    
      <Welcome/>
    <MenuItems/>
    <FeedbackForm/>
    
    

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 0.2, 
        backgroundColor:"yellow",
        paddingTop:40,
        paddingLeft:40,
        paddingRight:20
        
  },
  label:{
    fontSize:18,
    color:"black",
    fontWeight:"bold"
  },
  image:{
    flex:1
  },

})

export default App