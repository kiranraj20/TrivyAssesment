import { View, Text } from 'react-native'
import React from 'react'
import NavBar from './navBar'

const Ginie = () => {
  return (
    <View style={{position: 'relative',flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
      <Text style={{fontSize:24, fontWeight:800, color:'white'}}>Ginie</Text>
      <NavBar />
    </View>
  )
}

export default Ginie