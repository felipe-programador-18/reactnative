import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text>Remember and practice more and more always</Text>
      </View>
      <View style={styles.box}>
       <Text> The Years gonna be my!!!</Text>
      </View>
      <View style={styles.box}>
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
  box:{
    padding:30,
    backgroundColor:'grey',
    margin:4,
    color:'white',
    textAlign: 'center'
  }
});
