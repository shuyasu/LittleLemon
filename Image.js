import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const Welcome = () =>{
    return(
        <View style= {styles.container}>
            <Image 
            style = {styles.logo}
            source ={require ("./Image/LittleLemonLogo.jpg")}
            accessible={true}
            accessibilityLabel="Little Lemon Logo"
             />
             <Text style={styles.title}>
                LittleLemon, your local Mediterraneam Bistro
             </Text>
             <View
             style={{
                flexDirection:"row",
                justifyContent:"space-between"
             }}>
                <Image 
            style = {styles.logo}
            source ={require ("./Image/LittleLemonLogo.jpg")}
            accessible={true}
            accessibilityLabel="Little Lemon Logo"
             />
             <Text style={styles.title}>
                LittleLemon, your local Mediterraneam Bistro
             </Text>
             </View>
             <Image 
            style = {styles.image}
            source ={require ("./Image/image1.jpg")}
            accessible={true}
            accessibilityLabel="Food Picture 1"
             /><Image 
            style = {styles.image}
            source ={require ("./Image/Image2.jpg")}
            accessible={true}
            accessibilityLabel="Food Picture 2"
             /><Image 
            style = {styles.image}
            source ={require ("./Image/Image3.jpg")}
            accessible={true}
            accessibilityLabel="Food Picture 3"
             /><Image 
            style = {styles.image}
            source ={require ("./Image/Image4.jpg")}
            accessible={true}
            accessibilityLabel="Food Picture 4"
             />
        </View>

    )
}

const styles = StyleSheet.create({
     container:{
        flex:1,
        padding:20,
        marginTop:25
    },
    title:{
        fontSize:20,
        paddingLeft:70,
        fontStyle:"bold",
        color:"black"

    },
    logo:{
        height:100,
        width:100,
        paddingLeft:100,
        resizeMode:"contain",
        
    },
    image:{
        height:300,
        width:300,
        resizeMode:"contain",
        borderRadius:10,
        borderWidth:1,
        borderColor:"red",
        marginBottom:10
        
        
    }
    
})
export default Welcome