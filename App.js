import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [luku1, setluku1] = useState('');
  const [luku2, setluku2] = useState('');

  const [vastaus, setvastaus] = useState('');

  const buttonPressed1 = () => {
    setvastaus(luku1 + luku2);
  }

  const buttonPressed2 = () => {
    setvastaus(luku1 - luku2);
  }
  
  return (
    <View style={styles.container}>
      <Text>Result: {vastaus}</Text>
      <TextInput style={styles.input} keyboardType='numeric'  onChangeText={luku1 => setluku1(luku1)} value={luku1}/>
      <TextInput style={styles.input} keyboardType='numeric'  onChangeText={luku2 => setluku2(luku2)} value={luku2}/>
        <View style={styles.button}>
        <Button onPress={buttonPressed1} title="+" />
        <Button onPress={buttonPressed2} title="-" />
        </View>
      <StatusBar style="auto" />
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
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button : {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
