import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const Welcome = (props) => {
    const {name,old,address,phone} = props;
    const [hoTen, sethoTen] = useState('ABC');
    // if(hoTen !="DEF"){
    // sethoTen("DEF");
    // }
    const Clickdine = ()=>{
        sethoTen('AAA')
    }
    const Clickdungsai =(luachon)=>{
        if(luachon){
          console.log('Hello fpt');
        }else{
          console.log('GoodBye');
        }
    }
  return (
    <View>
      <Text>Welcome FPT</Text>
      <Text>Welcome {name}</Text>
      <Text>Welcome {old}</Text>
      <Text>Welcome {address}</Text>
      <Text>Welcome {phone}</Text>
      <Text>{hoTen}</Text>
      {/* <Button title='Click me' onPress={()=>{sethoTen('GGG')}}></Button> */}
      <Button title='click' onPress={Clickdine}/>
      <Button title='click true' onPress={()=> Clickdungsai(true)}/>
      <Button title='click false' onPress={()=>Clickdungsai(false)}/>
    </View>
  )
}

export default Welcome