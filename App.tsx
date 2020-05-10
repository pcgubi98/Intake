import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/library/components/header/Header';

export default function App() {
  return(
    <View>
      <Header />
      <View style={styles.container}>
        
        <Text>Nutrition Facts</Text>
        <Text> Hello its me</Text>
      </View>

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
  img: {
    height: 100,
    width: 100,
  }
});
