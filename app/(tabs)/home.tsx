import { View, Text } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{position: 'relative',flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
      <Text style={{fontSize:24, fontWeight:800, color:'white'}} >Home</Text>
      {/* <NavBar /> */}
    </View>
  )
}

