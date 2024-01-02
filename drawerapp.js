// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/Component/Header';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Header} options={{title:"SIGN IN "}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;


















import { View, Text,TextInput,StyleSheet, TouchableOpacity, Button } from 'react-native'
import React ,{useState}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import useState from 'react'

const Header = () => {
  const [text, setText] = useState('');
  const [Password, setPassword] = useState('');
  return (
    
   <SafeAreaView style={{marginTop:300}}>
          <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder='Enter Email Id '
      />
      <TextInput 
      style={styles.input}
      value={text}
      onChangeText={setPassword}
      placeholder='Enter Password'
      secureTextEntry={true}
      

      />
      <TouchableOpacity style={{marginTop:50}}>
        <Button style={styles.button}title='login'></Button>
      </TouchableOpacity>
      <Text>Don't have an account   </Text>
   </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    // marginTop:20
  },
  button:{
    marginLeft:"5%",
    width:20,
    marginLeft:20
  }
});

export default Header