import { StyleSheet, Text, View,Image, Pressable,ToastAndroid } from 'react-native'
import React,{useContext, useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppContext } from './ultil/Appcontext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosIntance from './ultil/AxiosIntance';
const Setting = (props) => {
  const {navigation} = props;
  const{setislogin} = useContext(AppContext); 

  const Clickne =()=>{
    navigation.navigate('Profile2');
  }
  const Clickne2 =()=>{
    navigation.navigate('ChangePass');
  }
  const DangXuat = async()=>{
    try{
      const response = await AxiosIntance().get("/auth/logout");
  
      if(response.error==false){
       
          setislogin(false);
   
      await AsyncStorage.removeItem("token", response.data.token);
        ToastAndroid.show("Dang xuat thanh cong",ToastAndroid.SHORT);
      }else{
            ToastAndroid.show("Dang xuat that bai",ToastAndroid.SHORT);
      }
  }catch(err){
      ToastAndroid.show("that bai",ToastAndroid.SHORT);
      
  }
  }
  return (
    <View style={styles.Container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Pressable onPress={Clickne}>
            <Image source={require('../image/ArrowLeft2.png')}></Image>
        </Pressable>
    
      <Text style={[styles.TextAll,{color:'rgba(0, 0, 0, 1)'}]}>Settings</Text>
      <Text></Text>
      

      </View>
      <View style={{marginTop:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
       <Image source={require('../image/Notification.png')}></Image>
        <Text  style={[styles.TextAll,{color:'rgba(0, 0, 0, 1)'}]}>Notification</Text>
        </View>
        <Image source={require('../image/ArrowRight.png')}></Image>

      </View>
      <Pressable onPress={Clickne2}>
      <View style={{marginTop:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
       <Image source={require('../image/Clock2.png')}></Image>
        <Text  style={[styles.TextAll,{color:'rgba(0, 0, 0, 1)'}]}>Security</Text>
        </View>
        <Image source={require('../image/ArrowRight.png')}></Image>
      </View>
    </Pressable>
      <View style={{marginTop:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
       <Image source={require('../image/Support2.png')}></Image>
        <Text  style={[styles.TextAll,{color:'rgba(0, 0, 0, 1)'}]}>Help</Text>
        </View>
        <Image source={require('../image/ArrowRight.png')}></Image>

      </View>
      <View style={{marginTop:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
       <Image source={require('../image/Moon.png')}></Image>
        <Text  style={[styles.TextAll,{color:'rgba(0, 0, 0, 1)'}]}>Dark Mode</Text>
        </View>
        <Image source={require('../image/DarkMode.png')}></Image>

      </View>
      
      <View style={{marginTop:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <Pressable onPress={DangXuat}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
       <Image source={require('../image/LogOut.png')}></Image>
        <Text  style={[styles.TextAll,{color:'rgba(0, 0, 0, 1)'}]}>Logout</Text>
        </View>
     </Pressable>

      </View>
      
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 24,
},
TextAll:{
  fontSize:16,
  fontWeight:'400',
  lineHeight:24,
  letterSpacing:0.12,
  

},
})