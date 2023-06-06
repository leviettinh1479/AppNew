import { StyleSheet, Text, View, Image, FlatList, Pressable, ActivityIndicator, ToastAndroid, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import NewList from './NewList'
import Bottom from './Bottom'
import axios from 'axios'
import AxiosIntance from './ultil/AxiosIntance';

import AsyncStorage from '@react-native-async-storage/async-storage'

const Bookmark = (props) => {
  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [loadding, setloadding] = useState(true);
  const [searchText,setsearchText] = useState("");
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await AxiosIntance().get("/articles");
        console.log(response);
        if (response.error == false) {
          setdataNe(response.data);
          setloadding(false);
        } else {
          ToastAndroid.show("Get data failed", ToastAndroid.SHORT);
        }
      } catch (e) {
        console.log(e);
      }

    }
    getNews();
    return () => {
    }
  }, [])
  let timeout = null;
  const countDownSearch = (searchText) =>{
    if(timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(()=>{
      SearchNew(searchText);
    },3000);
  }
  const SearchNew= async(searchText)=>{
    setloadding(true);
    const response = await AxiosIntance().get("/articles/search?title="+searchText);
    if(response.error==false){
      setdataNe(response.data);
      setloadding(false);
    }else{
      ToastAndroid.show("Get data failed", ToastAndroid.SHORT);

    }
  }

  // useEffect(() => {
  //   const getNews = async () => {
  //     const res = await AxiosIntance().get("")
  //   }

  //   return () => {

  //   }
  // }, [])


  // const [data,setdata] = useState([]);
  //   const {navigation} = props;
  //   const ClickNe = () =>{
  //     navigation.navigate('Chitiettintuc');
  //   }
  //   useEffect(() => {
  //     const getNews = async () => {
  //     console.log('aaaaaas');
  //     const res = await axios.get('https://63e44bd84474903105e95015.mockapi.io/Project');
  //     if(res != ""){
  //     setdata(res.data);
  //     }
  //     }
  //     getNews();
  //     return ()=>{}
  //     }, []);
  return (
    <View style={styles.Container}>
      <View style={styles.ViewImage}>
        <Image source={require('../image/Kabar.png')} />
        <Image source={require('../image/Ring.png')} />
      </View>
      <View>
        <TextInput style={{paddingLeft:30,borderWidth:2,marginTop:16,borderRadius:6,paddingRight:20}} placeholder='Search' onChangeText={(text)=> countDownSearch(text)}/>
        <TouchableOpacity onPress={SearchNew}>
             <Image style={{position:'absolute',right:10,bottom:15}} source={require('../image/Search.png')} />
        </TouchableOpacity>
     

      </View>
      <View style={styles.ViewLastestseeall}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Lastest</Text>
        <Text>See all</Text>
      </View>

      {
        loadding == true ?
          <View>
            <ActivityIndicator size='large' color='#ff0000' />
            <Text>Loading</Text>
          </View>
          :
          <FlatList
            data={dataNe}
            renderItem={({ item }) => <NewList data={item} navigation={navigation} />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
      }

    </View>

  )
}

export default Bookmark

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
