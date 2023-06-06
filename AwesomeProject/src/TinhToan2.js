import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TinhToan2 = () => {
  return (
    <View>
      <Text style={styles.Textne}>TinhToan2</Text>
      <Text style={styles.text2}>TinhToan3</Text>
    </View>
  )
}

export default TinhToan2

const styles = StyleSheet.create({
    Textne:{
        color:'black',
        fontSize:24,
        textAlign:'center'
    },
    text2:{
        fontFamily:'randomlol',
        fontSize:24
    }
})