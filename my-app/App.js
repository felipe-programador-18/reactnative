import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
      
   const [num, setNum] = useState(0)
   
   const Decrement  = () => {
     
     if(num > 0){
      setNum(num-1)
     }
   }
    
   const Increment = () =>{
     setNum(num+1)
   }
    
  return (
    <View style={styles.container}>
      
      <Text style = {styles.zero}> {num} </Text>
      <Button style={styles.one} title='-' onPress={Decrement} />
      <Button style={styles.two} title='+' onPress={Increment} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F44747',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zero :{
  margin:5
  }
  ,
  one:{
   display:'flex',
   margin:1
  },
  two:{
    display:'flex',
    margin:1
  }
});
