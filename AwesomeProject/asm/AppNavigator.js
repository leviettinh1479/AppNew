import { View, Text,Image } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from './ultil/Appcontext';
import New from './New';
import Profile from './Profile';
import Profile2 from './Profile2';
import Login from './Login';
import Signup from './Signup';
import Bottom from './Bottom';
import DetailNew from './DetailNew';
import Explore from './Explore';
import Bookmark from './Bookmark';
import PostNews from './PostNews';
import Setting from './Setting';
import ChangePass from './ChangePass';






const Stack = createNativeStackNavigator();

const User = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Dangnhap'>
            <Stack.Screen name="Dangnhap" component={Login} />
            <Stack.Screen name="Dangky" component={Signup} />
    
            {/* <Stack.Screen name="Tintuc" component={New} />
            <Stack.Screen name="Thongtin" component={Profile} />
            <Stack.Screen name="Bottom" component={Bottom} />
            <Stack.Screen name="Chitiettintuc" component={DetailNew} /> */}
        </Stack.Navigator>

    )
}
const Tab = createBottomTabNavigator();
//News,detail,search,profile
//bottom tab
const Main = () => {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'News') {
              iconName = focused ? require('../image/Home1.png') :require('../image/Home2.png') ;
              label='Home';
            } else if (route.name === 'Explore') {
              iconName = focused ? require('../image/Explore2.png') :require('../image/Explore.png');
              label='Explore';

            } else if (route.name === 'Bookmark') {
               iconName = focused ? require('../image/Bookmark2.png') :require('../image/Bookmark.png');
               label='Bookmark'
            }else if (route.name === 'EditProfile') {
              iconName = focused ? require('../image/User2.png') :require('../image/User.png');
              label='Profile'
             
            }
  
            // You can return any component that you like here!
            return <View style={{alignItems:'center',justifyContent:'center'}}>
  
            <Image source={iconName}  size={size} color={color}/>
            <Text style={{color: focused ? color:'rgba(78, 75, 102, 1)'}}>{label}</Text>
    
  
            </View>
          ;
          },
          tabBarActiveBackgroundColor:'rgba(255, 255, 255, 1)',
          headerShown:false,
          tabBarShowLabel:false,
          tabBarActiveTintColor: 'rgba(24, 119, 242, 1)',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="News" component={News}  />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="EditProfile" component={EditProfile} />
      </Tab.Navigator>
    )
}
const News =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tintuc" component={New}/>
            <Stack.Screen name="Chitiettintuc" component={DetailNew}/>
        </Stack.Navigator>
    )
}
const EditProfile=()=>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile2" component={Profile2} />
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="PostNews" component={PostNews}/>
        <Stack.Screen name="Thongtin" component={Profile}/>
        <Stack.Screen name="ChangePass" component={ChangePass} />

    </Stack.Navigator>
)
}
const AppNavigator = () => {
    const { islogin } = useContext(AppContext);
    return <>{islogin == false ? <User /> : <Main/>}</>
}

export default AppNavigator