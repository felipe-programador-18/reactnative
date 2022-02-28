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
        <View style = {styles.square}>
       <Text style = {styles.zero}> {num} </Text>
       <Button style={styles.one} title='-' onPress={Decrement} />
       <Button style={styles.two} title='+' onPress={Increment} />
        </View>
       <View>
        <Text style= {styles.footer} >Developer Felipe Martins Programer 18</Text>
       </View> 
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
  },
  square:{
    backgroundColor:'yellow',
    position:'absolute'
  },
  footer:{
    backgroundColor:'white',
    paddingEnd:4
  }

});
