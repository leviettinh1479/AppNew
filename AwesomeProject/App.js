import React from 'react';
import {
  SafeAreaView,Text,View,StyleSheet
} from 'react-native';
import Hello from './src/Hello';
import Welcome from './src/Welcome';
import TinhToan from './src/TinhToan';
import Xoso from './src/Xoso';
import Manhinh from './asm/Manhinh';
import TinhToan2 from './src/TinhToan2';
import Login from './asm/Login';
import Signup from './asm/Signup';
import Profile from './asm/Profile';
import New from './asm/New';
import NewList from './asm/NewList';
import DetailNew from './asm/DetailNew';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom from './asm/Bottom';
import { AppContextProvider } from './asm/ultil/Appcontext';
import AppNavigator from './asm/AppNavigator';
import New2 from './Xuongth/New2';
import NewList2 from './Xuongth/NewList2';
import Signup2 from './Xuongth/Signup2';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  //let ten ='Tình Lê';
  //"const" là hằng số ko cho thay đổi giá trị , còn muốn đổi dùng "let"
  return (
    <AppContextProvider>
      <NavigationContainer styles={styles.container}>
        <AppNavigator/>
      </NavigationContainer>
    </AppContextProvider>
    // <View>
      
    // </View>


  )
};

export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})