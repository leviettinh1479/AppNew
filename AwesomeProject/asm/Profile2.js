import { StyleSheet, Text, View, Image, Pressable, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosIntance from './ultil/AxiosIntance';

import NewList from './NewList';

const Profile2 = (props) => {
    const {navigation} = props;
  const [dataNe, setdataNe] = useState([]);
  const [Loadding, setLoadding] = useState(false);

    useEffect(() => {
        const getNews = async () => {
          try {
            const response = await AxiosIntance().get("/articles/my-articles");
            console.log(response);
            if (response.error == false) {
              setdataNe(response.data);
              setLoadding(false);
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
    const ClickNe = () =>{
        navigation.navigate('Thongtin');
      }



  const Clickne2 =()=>{
    navigation.navigate('Setting');
  }
  const Clickne3 =()=>{
    navigation.navigate('PostNews');
  }

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text></Text>
                <Text>Profile</Text>
                <Pressable onPress={Clickne2}>
                     <Image source={require('../image/Lucgiac.png')}></Image>
                </Pressable>
               

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={require('../image/Profilesmol.png')}></Image>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Text style={{ color: 'rgba(0, 0, 0, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '600' }}>2156</Text>
                    <Text style={{ color: 'rgba(78, 75, 102, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '400' }}>Followers</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Text style={{ color: 'rgba(0, 0, 0, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '600' }}>2156</Text>
                    <Text style={{ color: 'rgba(78, 75, 102, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '400' }}>Following</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Text style={{ color: 'rgba(0, 0, 0, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '600' }}>23</Text>
                    <Text style={{ color: 'rgba(78, 75, 102, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '400' }}>News</Text>
                </View>
            </View>
            <Text style={{ marginTop: 16, color: 'rgba(0, 0, 0, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '600' }}>Wilson Franci</Text>
            <Text style={{ color: 'rgba(78, 75, 102, 1)', fontSize: 16, lineHeight: 24, letterSpacing: 0.12, fontWeight: '400' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' ,marginRight:15}}>
                <Pressable style={styles.ButtonPres} onPress={ClickNe}>
                    <Text style={styles.TextPres}>Edit profile</Text>
                </Pressable>
                <Pressable style={styles.ButtonPres}>
                    <Text style={styles.TextPres}>Website</Text>
                </Pressable>
            </View>
            {
                Loadding == true ?
                <ActivityIndicator size={'large'}></ActivityIndicator>
                :
                  <FlatList
            data={dataNe}
            renderItem={({ item }) => <NewList data={item} navigation={navigation} />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
            }
           
          
        <Pressable onPress={Clickne3} style={styles.ImageAdd}>
                     <Image  source={require('../image/Add.png')}></Image>
            </Pressable>
            
        </View>
    )
}

export default Profile2

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 24,
    },
    ButtonPres: {
        backgroundColor: 'rgba(24, 119, 242, 1)',
        borderRadius: 6,
        width: 182,
        height: 50,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop:16

    },
    TextPres: {
        color: 'white',
        fontSize: 16, 
        lineHeight: 24, 
        letterSpacing: 0.12, 
        fontWeight: '600'
    },
    ImageAdd:{
        position:'absolute',
        right:1,
        bottom:10
    }
})