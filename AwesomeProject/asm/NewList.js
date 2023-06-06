import { StyleSheet, Text, View,Image, Pressable, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'

const NewList = (props) => {
    const {data,navigation} =props;
 
    const ClickNe = () =>{
        // console.log("click");
      navigation.navigate("Chitiettintuc",{id: data._id});
    }

  
  return (

    <TouchableOpacity onPress={ClickNe}>
    <View style={styles.Container}>
    
     <Image style={styles.Imagestyle} source={{uri:data.image}}/>
        <View style={styles.Viewtitle}>
            <Text>Europe</Text>
            <Text style={styles.TextTitle}>{data.name} </Text>
            <Text>{data.price}</Text>
            <Text>{data.category}</Text>
            <Text>{data.quantity}</Text>
            
              <View style={styles.ViewBBC}>
        <Image style={styles.ImageBBC} source={require('../image/BBC.png')} ></Image>
        <Text style={{marginLeft:5}}>BBC News</Text>
        <Image style={{marginLeft:5}} source={require('../image/Clock.png')}></Image>
        <Text>14m ago</Text>
        </View>
        </View>
     
    </View>
    </TouchableOpacity>

  )
}

export default NewList

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        marginTop:16.7,
        marginBottom:16.7
        
    },
    Imagestyle:{
        width:96,
        height:96,
        borderRadius:10,
    },
    TextTitle:{
        color:'blue',
        fontFamily:'Poppins',
        fontWeight:'400',
        lineHeight:24,
        letterSpacing:0.12,
        
    },
    Viewtitle:{
        marginLeft:10,
    },
    ViewBBC:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    ImageBBC:{
        width:20,
        height:20,
    }
})