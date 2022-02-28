import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text>Remember and practice more and more always</Text>
      </View>
      <View style={styles.box}>
       <Text></Text>
      </View>
      <View style={styles.box}></View>
     
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
    margin:4
  }
});
