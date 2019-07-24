import * as React from 'react';
import {
  TextInput,
  Text,
  Alert,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
} from 'react-native';
import { Input } from 'react-native-elements';
import firebase from './../firebase.js';
import Constants from 'expo-constants';

export default class SignUp extends React.Component {
  state = {
    userName: ' ',
    password: '',
    age: '',
  };

  goToSecondScreen = () => {
    this.publish();
    if (
      this.state.userName != '' &&
      this.state.password != '' &&
      this.state.age != '' &&
      this.state.gender != ''
    ) {
      this.props.navigation.navigate('LogIn');
    }

  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Sign up</Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 130,
          }}>
          User
        </Text>
        <Input
          placeholder="Username"
          onChangeText={userName => this.setState({ userName: userName })}
        />
        <Input
          placeholder="Password "
          secureTextEntry={true}
          onChangeText={password => this.setState({ password: password })}
        />
        <Input
          placeholder="Age"
          onChangeText={age => this.setState({ age: age })}
        />

        <TouchableOpacity onPress={this.goToSecondScreen}>
          <Text style={styles.buttonText}> Next step</Text>
        </TouchableOpacity>
      </View>
    );
  }
  publish = () => {
    const users = firebase.database().ref('users');
    users.push({
      userName: this.state.userName,
      password: this.state.password,
      age: this.state.age,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonText: {
    marginLeft: 200,
    marginTop: 70,
    color: 'blue',
  },
});
