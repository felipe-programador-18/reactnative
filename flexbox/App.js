import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import logo from './assests/nature.jpg'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.boxone}>
      <Text>Remember and practice more and more always</Text>
      <Image style={styles.img} source={logo} />
      </View>
      <View style={styles.boxtwo}>
       <Text> The Years gonna be my!!!</Text>
      </View>
      <View style={styles.boxthree}>
      <Text>My working strugling going be rewards!!!</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'stretch' ,
    justifyContent: 'space-between',
  },
  boxone:{
    //padding:30,
    flex:1,
    backgroundColor:'grey',
    alignItems:'center',
    height:80,
    margin:4,
    color:'white',
    textAlign: 'center',
  },
  boxtwo:{
    //padding:30,
    flex:2,
    backgroundColor:'grey',
    height:80,
    margin:4,
    color:'white',
    textAlign: 'center',
  },
  boxthree:{
    //padding:30,
    flex:3,
    backgroundColor:'grey',
    height:80,
    margin:4,
    color:'white',
    textAlign: 'center',
  },

  img:{
    width:200,
    position:'relative',
    height:80
    }  
});
