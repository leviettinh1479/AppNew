import { View, Text, Pressable,StyleSheet } from 'react-native'
import React,{useState} from 'react'
const styles = StyleSheet.create({
  style1:{
    color:'red',textAlign:'center',fontSize:40
  },
  style2:{
    color:'blue',fontWeight:'bold',fontSize:50,textAlign:'center'
  },
  style3:{
    color:'blue',fontWeight:'bold',fontSize:50,textAlign:'center'
  },
  style4:{
    color:'blue',fontWeight:'bold',fontSize:50,textAlign:'center'
  },
  style5:{
    borderWidth:1,padding:15,backgroundColor:'green',margin:5
  },
  style6:{
    color:'white',textAlign:'center',fontSize:20
  },
  style7:{
    borderWidth:1,padding:15,backgroundColor:'gray',margin:5
  }
})

const TinhToan = () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(1);
    const [num3, setnum3] = useState(2);

    const luachon =(isChoose)=>{
        let tong = num1 + num2;
        if((tong == num3&& isChoose==true) ||(tong!=num3&&isChoose==false)){
        setnum1(Math.floor(Math.random()*10));
        setnum2(Math.floor(Math.random()*10));
        setnum3(Math.floor(Math.random()*20));
         alert('Bạn đã chọn đúng');
        }else{
         alert('Bạn đã chọn sai , GAME OVER');

        }

       
    }
  return (
    <View>
      <Text style={styles.style1}>Bạn giỏi phép cộng</Text>
      <Text style={styles.style2}>{num1} + {num2}</Text>
      <Text style={styles.style3}>=</Text>
     <Text style={styles.style4}>{num3}</Text>
     <Pressable onPress={()=>luachon(true)} style={styles.style5}>
        <Text style={styles.style6}>Đúng</Text>
     </Pressable>
     <Pressable onPress={()=>luachon(false)} style={styles.style7}>
        <Text style={styles.style6}>Sai</Text>
     </Pressable>
    </View>
  )
}

export default TinhToan