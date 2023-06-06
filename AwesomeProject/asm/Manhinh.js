import { View, Text,Image } from 'react-native'
import React from 'react'

const Manhinh = () => {
  return (
    <View>
      {/* <Text style={{alignItems:'center'}} >Manhinh</Text>  */}
      <Image style={{alignSelf:'center',marginTop:325}} source={require('../image/Vector.png')}/>
    </View>
  )
}

export default Manhinh