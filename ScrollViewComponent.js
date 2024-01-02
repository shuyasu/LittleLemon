import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'




const menuItemsToDisplay = [
  'Hummus \n Moutable \n Falafal \n Marinated olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n panna cotta'
]
 


      const MenuItems = () =>{
        return (
            <View style = {styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={true}
            
            // indicatorStyle={{
            //   backgroundColor:"white"
            // }}
            >
            <Text style={styles.label}>VIEW MENU</Text>
            <Text style = {styles.title}>{menuItemsToDisplay[0]}</Text>
            
            </ScrollView>
            </View>
        )

      };

      const styles = StyleSheet.create({
        container:{
          flex:1,
          backgroundColor: "white",
          padding: 40,
          
        },
        label:{
          color:"red",
          fontSize:30,
        },
        title:{
          fontSize:50,
          color:"black"
        }
      })

    

export default MenuItems;