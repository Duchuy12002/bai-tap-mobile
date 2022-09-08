import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:2}}></View>
      <View style={styles.box}><Text>Hello World</Text></View>
       <Button 
       onPress={()=> {alert('Xin chào')}}
       title='Click me'
        />
      <View style={{flex:2}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex : 1,
    backgroundColor: 'black',
    width:500,
    alignItems:'center',
    justifyContent:'center'
  },
});