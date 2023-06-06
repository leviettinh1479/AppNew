import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Screen2 = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const ClickTroVeNe = () => {
    //Cách 1
    navigation.navigate('Screen1');
    //Cách 2
    // navigation.goBack();
  }
  return (
    <View>
      <View>
        <Text>Họ tên: {params?.name}</Text>
        <Text>Tuổi: {params?.old}</Text>
      </View>
      <Text>Screen2</Text>
      <Pressable onPress={ClickTroVeNe} style={styles.Pressable1}>
        <Text style={styles.TextPres}>bấm vào đây(Screen1)</Text>
      </Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  Pressable1: {
    borderWidth: 2,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  TextPres: {
    color: 'white'
  }
})