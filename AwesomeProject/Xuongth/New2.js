import { StyleSheet, Text, View, Image, FlatList, Pressable, ActivityIndicator, ToastAndroid, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import NewList2 from './NewList2'

import axios from 'axios'


const New2 = (props) => {

  const [dataNe, setdataNe] = useState([]);
  const [loadding, setloadding] = useState(true);




  const [data, setdata] = useState([]);
  const { navigation } = props;
  const ClickNe = () => {
    navigation.navigate('Chitiettintuc');
  }
  useEffect(() => {
    const getNews = async () => {
      console.log('aaaaaas');
      const res = await axios.get('https://63e44bd84474903105e95015.mockapi.io/Project');
      if (res != "") {
        setdata(res.data);
      }
    }
    getNews();
    return () => { }
  }, []);
  return (
    <View style={styles.Container}>
      
        <Image source={require('../image/ArrowOra.png')}></Image>
        <Text style={{fontWeight:'bold',fontSize:24,color:'rgba(255, 94, 0, 1)',textAlign:'center'}} >Cart</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <NewList2 data={item} navigation={navigation} />}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
     
      />
      <Pressable  style={{justifyContent:'center',alignItems:'center',width:'100%',height:50,marginTop:20,marginBottom:20,borderRadius:30,backgroundColor:'rgba(255, 94, 0, 1)'}}>
        <Text style={{color:'white',fontSize:18,fontWeight:'700'}}>
       CheckOut
        </Text>
      </Pressable>

    </View>

  )
}

export default New2

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 24,
  },
  ViewImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ViewLastestseeall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 42,
  }

})
