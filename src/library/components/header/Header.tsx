import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./uglylogo.jpeg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslateblue',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: 100,
  }
});
