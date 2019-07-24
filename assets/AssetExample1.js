import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Brans Academy</Text>
        <Text style={styles.paragraph1}>
Welcome to Palestinien Basketball Club, home to all local players. With introductory and development programs as well as junior, youth league and senior district competition teams, there is something for everybody!                                                                                     Date : 7/11 - 8/17
                                                                                                        
        </Text>
        <Text style={styles.paragraph1}>Location : Ramallah -  AL-Tereh</Text>
        <Text style={styles.paragraph1}>Telephone : 022919785</Text>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://pbs.twimg.com/media/D6zZdQQV4AA01kw.jpg:large',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'top',
    justifyContent: 'center',
    padding: 13,
  },
  paragraph: {
    margin: 5,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'green',
  },
  paragraph1: {
    margin: 0,
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 70,
    width: 70,
  },
});
