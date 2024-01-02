import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

const FeedbackForm = () =>{
    const[firstName,onChangeFirstName]=useState(" ")
    const[LastName,onChangeLastName]=useState("")
    const[Experince,onChangeExperince]=useState("")
    return(
        <ScrollView style={styles.container}>

            <Text style = {styles.label}>Thankyou for Choose LittleLemon Restraunt</Text>
            <TextInput
            value={firstName}
            onChangeText={onChangeFirstName}
            style={styles.input}
            placeholder="FirstName"> 
         </TextInput>
            <TextInput
            value={LastName}
            onChangeText={onChangeLastName}
            style={styles.input}
            placeholder="LastName"> 

            </TextInput>
            <TextInput
            value={Experince}
            onChangeText={onChangeExperince}
            style={styles.input}
            placeholder="Experince">

            </TextInput>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"brown",
        paddingTop:40,
        paddingLeft:40,

    },
    input:{
        fontSize:20,
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        fontSize:16,
        borderColor:"blue",
        backgroundColor:"white",
    },
    label:{
        fontSize:30,
        color:"white",
        paddingBottom:20,
        paddingRight:10

    }
})

export default FeedbackForm
