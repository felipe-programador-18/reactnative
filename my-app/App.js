import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import logo from './assets/img.jpg'

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
       <View>
            
        <Text style= {styles.footer} >Developer Fe-Prog-18</Text>
       </View> 
     
    </View>
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
   display:'flex'
  },
  two:{
    display:'flex',
    margin:1
  },
 
  footer:{
    backgroundColor:'white',
   marginTop:370
  },

  square:{
    padding: 10
  }

});
