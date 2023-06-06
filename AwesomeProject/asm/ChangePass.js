import { StyleSheet, Text, TextInput, View ,Checkbox, Pressable,Image, ScrollView,ToastAndroid,secureTextEntry} from 'react-native'
import React ,{useContext, useState}from 'react'
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosIntance from './ultil/AxiosIntance';
import { AppContext } from './ultil/Appcontext';



const ChangePass = (props) => {
    const{setislogin,setinforuser} = useContext(AppContext); 

    const [password2,setpassword2] =useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const {navigation} = props;

  const ClickNe = () =>{
    navigation.navigate('Dangky');
  }
  const ClickShowpass =()=>{

  }
  const dangnhapne= async()=>{

    try{
    const response = await AxiosIntance().post("/users/change-password",{password: password2});

    if(response.error==false){
      
        setislogin(false);
      console.log(response.data.token);
    

      ToastAndroid.show("Thay doi mat khau thanh cong",ToastAndroid.SHORT);
    }else{
          ToastAndroid.show("thay doi that bai",ToastAndroid.SHORT);
    }
}catch(err){
    ToastAndroid.show("that bai",ToastAndroid.SHORT);
    
}

}
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View>
              <Text style={styles.Hello}>Hello</Text>
      <Text style={styles.Again}>Again!</Text>
      <Text style={styles.Welcome}>Welcome back you've {'\n'}been missed</Text>
      
        </View>
        <View style={styles.ViewUsername}>
            <Text style={styles.TextUsernamePW}>Username</Text>
            <Text style={styles.Daunhan}>*</Text>
        
        </View>
     
        <View style={styles.ViewPassword}>
        <Text style={styles.TextUsernamePW}>Password</Text>
            <Text style={styles.Daunhan}>*</Text>
        </View>
        <View>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={setpassword2}/>
        <Pressable onPress={ClickShowpass}>
                <Image style={styles.hidepassword} source={require('../image/hidepassword.png')}></Image>

        </Pressable>
    

        </View>

   
        <Pressable style={styles.Buttonlogin} onPress={dangnhapne}>
            <Text style={styles.TextLogin}>Change password</Text>
        </Pressable>
        <Text style={styles.Textorcontinue}>Or continue with</Text>

        <View style={styles.ViewFacebookGoogle}>
            <Pressable style={styles.ButtonFacebook}>
                <Image style={styles.ImageFacebook} source={require('../image/Icon.png')}></Image>
                <Text style={styles.TextFacebook}>Facebook</Text>
            </Pressable>
            <Pressable style={styles.ButtonFacebook}>
                <Image style={styles.ImageFacebook} source={require('../image/Icon2.png')}></Image>
                <Text style={styles.TextFacebook}>Google</Text>
            </Pressable>
        </View>
        <View>
        <Pressable style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:16}} onPress={ClickNe}>
                   <Text style={styles.Textdonthaveanaccount}>Don't have an account ?</Text>
                    <Text style={{color:'blue'}}>Sign up</Text>
        </Pressable>
        </View>
      
 
        </ScrollView>
       
    </View>
  )
}

export default ChangePass
const styles = StyleSheet.create({
Container:{
     flex:1,
    marginLeft:25,
    marginRight:25,
    marginTop:24,
},
Hello:{
    color:'black',
    fontSize:48,
    letterSpacing:0.12,
    lineHeight:72,
    fontWeight:'bold',
    fontFamily:'Poppins'
    
},

Again:{
    color:'rgba(24, 119, 242, 1)',
    fontSize:48,
    letterSpacing:0.12,
    lineHeight:72,
    fontWeight:'bold',
    fontFamily:'Poppins'

},
Welcome:{
    fontWeight:'400',
    fontSize:20,
    lineHeight:30,
    letterSpacing:0.12
},
ViewUsername:{
    flexDirection:'row',
    marginTop:48,
},
Daunhan:{
color:'red'
},
input:{
    height: 48,
    borderWidth: 2,
    padding: 10,
    borderRadius:6,
    gap:10,
    borderColor:'rgba(78, 75, 102, 1)'
    
   
},
ViewPassword:{
    flexDirection:'row',
    marginTop:16
},
Forgotthepassword:{
    color:'rgba(88, 144, 255, 1)',
    fontSize:14,
    lineHeight:21,
    letterSpacing:0.12,
    fontWeight:'400',
    marginTop:4

},
ViewRememberme:{
    marginTop:9.5,
    flexDirection:'row',
    justifyContent:'space-between'
   
    
},
ViewForgotpassword:{
alignItems:'center'
},
Buttonlogin:{
    marginTop:16,
    borderRadius:10,
    height:50,
    backgroundColor:'rgba(24, 119, 242, 1)',
    paddingVertical:10,
    alignItems:'center'
    
},
TextLogin:{
    textAlign:'center',
    color:'white',
    fontSize:16,
    lineHeight:24,
    letterSpacing:0.12,
    fontWeight:'600',
   fontFamily:'Poppins'
    
},
Textorcontinue:{
    textAlign:'center',
    marginTop:16,
    fontSize:14,
    lineHeight:21,
    fontWeight:'400',
    letterSpacing:0.12,
},
ImageFacebook:{
    width:24,
    height:25
},
ButtonFacebook:{
    flexDirection:'row',
    gap:10,
    borderRadius:10,
    backgroundColor:'rgba(238, 241, 244, 1)',
    width:174,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    Padding: 12,
    

},
TextFacebook:{
    fontSize:16,
    lineHeight:24,
    letterSpacing:0.12,
    fontWeight:'600',
   fontFamily:'Poppins',
   color:'rgba(102, 112, 128, 1)',
   marginLeft:10,
},
ViewRememberme2:{
    flexDirection:'row',
    alignItems:'center'
},
ViewFacebookGoogle:{
    flexDirection:'row',
    justifyContent:'space-between'
},
Textdonthaveanaccount:{
    fontFamily:'Poppins',
    textAlign:'center',
    fontSize:14,
    lineHeight:21,
    fontWeight:'400',
    letterSpacing:0.12,
},
TextUsernamePW:{
    fontFamily:'Poppins',
    fontSize:14,
    lineHeight:21,
    fontWeight:'400',
    letterSpacing:0.12,
    color:'rgba(78, 75, 102, 1)'
},
hidepassword:{
    position:'absolute',
    bottom:13,
    right:10,
}



})