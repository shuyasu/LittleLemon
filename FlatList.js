import { View, Text ,FlatList } from 'react-native'
import React from 'react'

const FlatListComp = () => {
const renderMyData=({item})=>{
    return(
        <Text>{item.NAME}</Text>
    )
}

    const dataArray=[{
        NAME:"Shubham"
    },
{
        NAME:"Rahul"
    }]
  return (
  <View>

      <FlatList
        data={dataArray}
        renderItem={renderMyData}

      />
  </View>
    
  )
}

export default FlatListComp