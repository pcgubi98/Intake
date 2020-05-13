import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Header} from 'react-native-elements';

export default function App() {
  return(
    <View style={styles.container}>
      <Header
        barStyle="light-content"
        leftComponent={{ icon: 'menu', color: '#000' }}
        centerComponent={<CenterLogo /> }
        rightComponent={{ icon: 'home', color: '#000' }}
        containerStyle={{
          height: 100,
          backgroundColor: '#ffddab',
          justifyContent: 'space-around',
        }}
      />
      <View style={styles.container}>
        
        <Text>Nutrition Facts</Text>
        <Text> Hello its me</Text>
        <Text> yo soy health</Text>
        
      </View>

    </View>
  );
}

export class CenterLogo extends React.Component {
  render() {
    return <Image style={this.styles.img} source={require('./intakegreencopy.png')} />;
  }

  styles = StyleSheet.create({
    
    img: {
      height: 45,
      width: 45 * 3.174,
    },
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
