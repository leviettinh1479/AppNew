import { StyleSheet, Text, View, Image, Pressable, Button, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AxiosIntance from './ultil/AxiosIntance';
import Dialog from "react-native-dialog";


const PostNews = () => {
  const [image, setimage] = useState(null);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [category, setcategory] = useState("");
  const [visible, setVisible] = useState(false);
  const [firstimage, setsecondimage] = useState(false);
  

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };


  const clickchupanh = async () => {

    const result = await launchCamera();
    console.log(result);
    console.log(result.assets[0].uri);

    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    })

    const response = await AxiosIntance("multipart/form-data").post('api/Product/upload', formdata);
    console.log(response);
    setimage(response.url);
    setsecondimage(true);
  }
  const clickanhthuvien = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);

    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    })

    const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
    console.log(response.data.path);
    setimage(response.data.path);
  }
  const dangbai = async () => {
    const response = await AxiosIntance().post("api/Product/AddNew", { name: name, price: price, image: image,quantity:quantity,category:category });
    console.log(response);
    if (response!="") {
      ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Đăng tin thất bại", ToastAndroid.SHORT);

    }

  }
  return (
    <ScrollView style={styles.Container2}>
      <View style={styles.Container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={require('../image/ArrowLeft2.png')}></Image>

          <Text style={styles.TextAll}>Create News</Text>
          <Image source={require('../image/BaCham.png')}></Image>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>

          {
            firstimage ==true?
            <Pressable style={{ }} onPress={showDialog}>
            <Image style={{width:400,height:200}} source={{uri:image}}></Image>
          </Pressable>
          :
             <Pressable style={{ }} onPress={showDialog}>
            <Image source={require('../image/ChoseImage.png')}></Image>

          </Pressable>
          }
       
        </View>
        <TextInput style={{ fontSize: 24, letterSpacing: 1, }} onChangeText={setname} placeholder="Name" placeholderTextColor={'rgba(160, 163, 189, 1)'}></TextInput>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../image/Line.png')}></Image>
        </View>
        <TextInput style={{ fontSize: 16 }} onChangeText={setprice} placeholder="Price" placeholderTextColor={'rgba(160, 163, 189, 1)'}></TextInput>
        <TextInput style={{ fontSize: 16 }} onChangeText={setquantity} placeholder="Quantity" placeholderTextColor={'rgba(160, 163, 189, 1)'}></TextInput>
        <TextInput style={{ fontSize: 16 }} onChangeText={setcategory} placeholder="Category" placeholderTextColor={'rgba(160, 163, 189, 1)'}></TextInput>
        <View style={{ marginTop: 116 }}>
          <Image source={require('../image/StyleFont.png')}></Image>
        </View>

        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
          <Image source={require('../image/OptionNews.png')}></Image>
          <Pressable style={{ backgroundColor: 'rgba(24, 119, 242, 1)', borderRadius: 6, width: 100, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={dangbai}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Publish</Text>
          </Pressable>

        </View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Add Cover Photo</Dialog.Title>
          <Pressable style={{ backgroundColor: 'rgba(24, 119, 242, 1)', borderRadius: 6, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={clickchupanh}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Take Photo</Text>
          </Pressable>
          <Pressable style={{ marginTop: 5, backgroundColor: 'rgba(24, 119, 242, 1)', borderRadius: 6, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={clickanhthuvien}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Library</Text>
          </Pressable>
          <Dialog.Button label="Cancel" onPress={handleCancel} />

        </Dialog.Container>

        {/* <Image style={styles.image} source={{ uri: image }}></Image> */}



      </View>
    </ScrollView>
  )
}

export default PostNews

const styles = StyleSheet.create({
  Container2: {
    backgroundColor: 'white',
  },
  Container: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 24,

  },
  image: {
    width: 120,
    height: 50
  },
  TextAll: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,


  },
})