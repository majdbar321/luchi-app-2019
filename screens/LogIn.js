import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import firebase from './../firebase.js';

//GLOBAL VARS
var FLAG = 0;
var USERNAME = ' ';
var Password = '';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.checkUsers();
  }
  usersList = [];
  state = {
    userName: ' ',
    password: '',
    flag: 0,
    // error: '',
  };
  signUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  checkUsers = () => {
    firebase
      .database()
      .ref('users')
      .on('value', snapshot => {
        const users = snapshot.val();
        //console.log(JSON.stringify(users));
        this.usersList = [];
        for (var key in users) {
          this.usersList.push(users[key]);
        }

        console.log(JSON.stringify(this.usersList));
      });
  };

  gotoScreenTwo = () => {
    // check if current login credentials are in usersList
    var found = false;
    for (let i = 0; i < this.usersList.length; i += 1) {
      let user = this.usersList[i];
      if (
        user.userName == this.state.userName &&
        user.password == this.state.password
      ) {
        found = true;
        break;
      }
    }

    if (!found) {
      alert('incorrect login');
    } else {
      this.props.navigation.navigate('Profile', {
        userName: this.state.userName,
      });
    }
  };

  render() {
    //console.log(JSON.stringify(this.sta))
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                height: '170%',
                width: '100%',
                resizeMode: 'stretch',
              }}
              source={require('../images/yellowfadebackground7.png')}>
              <View style={styles.container1}>
                <Image
                  source={require('../images/luchi_clear.png')}
                  style={styles.image}
                />
                <Text style={styles.fill}>'Fill your time with joy'</Text>
              </View>
              <View>
                <Input
                  leftIcon={{ type: 'font-awesome', name: 'user' }}
                  placeholder="  Username"
                  containerStyle={{
                    backgroundColor: 'white',
                    width: 230,
                    marginLeft: 88,
                  }}
                  inputStyle={{}}
                  onChangeText={text => this.setState({ userName: text })}
                  inputContainerStyle={{}}
                />
                <Input
                  style={styles.inputstyle}
                  containerStyle={{
                    backgroundColor: 'white',
                    width: 230,
                    marginLeft: 88,
                    marginTop : 10
                  }}
                  leftIcon={{ type: 'font-awesome', name: 'lock' }}
                  placeholder="  Password"
                  secureTextEntry={true}
                  onChangeText={password =>
                    this.setState({ password: password })
                  }
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.gotoScreenTwo}>
                  <Text style={styles.textstyle}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.signUp}>
                  <Text style={styles.textstyle2}>
                    {' '}
                    Dont have an account ??
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'White',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   fontFamily: 'vincHand',
  // },
  button: {
    title: 'Outline button',
    type: 'outline',
  },
  image: {
    width: 210,
    height: 210,
    marginLeft: 88,
    marginTop: 40,
  },
  fill: {
    fontSize: 13,
    textAlign: 'center',
    fontStyle : "italic" , 
    marginBottom: 60,

  },
  textstyle: {
    textAlign: 'center',
    padding: 19,
    fontFamily: 'vincHand',
    color: 'black',
    backgroundColor : "#fabc37" ,
    width : 100 , 
    marginLeft : 142 ,
    marginTop : 30 , 
    borderRadius : 70
  },
  textstyle2: {
    marginLeft: 110,
    color: '#0099cc',
    marginTop : 210 ,
  },
  inputstyle: {
    marginBottom: 90,
  },
});
