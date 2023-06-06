import { StyleSheet, Text, View,Tab,Navigator ,Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home'
import Setting from './Setting'
import Explore from './Explore'
import Bookmark from './Bookmark'
import Profile from './Profile';
import New from './New';
import DetailNew from './DetailNew';
import Login from './Login';
import Signup from './Signup';




const Bottom = () => {

  const Tab = createBottomTabNavigator();



  return (

    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tintuc') {
            iconName = focused ? require('../image/Home1.png') :require('../image/Home2.png') ;
          } else if (route.name === 'Explore') {
            iconName = focused ? require('../image/Explore2.png') :require('../image/Explore.png');
          } else if (route.name === 'Bookmark') {
            iconName = focused ? require('../image/Bookmark2.png') :require('../image/Bookmark.png');
          }else if (route.name === 'Thongtin') {
            iconName = focused ? require('../image/User2.png') :require('../image/User.png');
          }

          // You can return any component that you like here!
          return <View>

          <Image source={iconName}  size={size} color={color}/>
  

          </View>
        ;
        },
        tabBarActiveBackgroundColor:'rgba(255, 255, 255, 1)',
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Tintuc" component={New} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Thongtin" component={Profile} />
      
    </Tab.Navigator>
  )
}

export default Bottom

const styles = StyleSheet.create({})