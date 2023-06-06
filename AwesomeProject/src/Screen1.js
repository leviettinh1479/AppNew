import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Screen1 = (props) => {
  const {navigation} = props;
  const ClickNe = () =>{
    navigation.navigate('Screen2', {name: 'Nguyễn Văn A', old: 26});
  //Truyền tên Screen muốn chuyển qua vào navigate
  // navigation.navigate('Screen2');
  }
  return (
    <View>
      <Text>Screen1</Text>
      <Pressable style={styles.Pressable1} onPress={ClickNe}>
        <Text style={styles.TextPres}>bấm vào đây(Screen2)</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    Pressable1:{
        borderWidth:2,
        backgroundColor:'blue',
        borderRadius:10,
    },
    TextPres:{
        color:'white'
    }
})