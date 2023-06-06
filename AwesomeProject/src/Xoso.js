import { View, Text, Pressable,TextInput,StyleSheet,s } from 'react-native'
import React,{useState} from 'react'

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const Xoso = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [ketquacuoi,setketquacuoi] = React.useState("null");
  const [textdudoan, settextdudoan] = useState(Math.floor(Math.random()*10));
  const randomlol =(number)=>{
    clearImmediate();
   settextdudoan(Math.floor(Math.random()*10));
    if(textdudoan==number){
      setketquacuoi('Bạn đã đoán đúng');
    }else{
      setketquacuoi('Bạn đã đoán sai,kết quả đúng là  :'+textdudoan); 
      
    }
}
  return (
    <View>
      <Text style={{color:'blue',textAlign:'center',fontSize:40}}>Xổ số đê !!!</Text>
      <Text style={{color:'green',textAlign:'center',fontSize:30}}>Nhập từ 1 đến 100</Text>
      <TextInput
        style={styles.input}
        onChangeText={(number)=>onChangeNumber(number)}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Pressable onPress={()=>randomlol(number)} style={{borderWidth:1,backgroundColor:'red',margin:10}}>
        <Text style={{color:'white',textAlign:'center',fontSize:20}}>Dự đoán</Text>
      </Pressable>
   <Text style={{color:'pink',fontSize:20,fontWeight:'bold',marginStart:10}}>{ketquacuoi}</Text>
    </View>
  )
}

export default Xoso