import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

export default class FourthScreen extends React.Component {
  gotoScreenFive = () => {
    this.props.navigation.navigate('Fifth');
  };
  signOut = () => {
    this.props.navigation.navigate('LogIn');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', textAlign: 'center' }}>
          <Image
            source={require('../images/setting-512.png')}
            style={styles.image}
          />
          <Text style={styles.setting}> Settings </Text>

          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={this.gotoScreenFive}>
            <Text style={styles.text}>Edit Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.text}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={this.signOut}>
            <Text style={styles.text}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F3CA3F',
    borderRadius: 100/10,
    padding: 10,
    margin: 1,
    height: 100,
    width: 300,
    fontSize: 38,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#B0B0B0',
    borderRadius: 100 / 10,
    margin: 1,
    height: 100,
    width: 300,
    fontSize: 38,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
    margin: 20,
  },
  setting: {
    fontSize: 30,
    fontStyle: 'bold',
    textAlign: 'center',
    fontFamily: 'vincHand',
    marginBottom:20,
  },
});
