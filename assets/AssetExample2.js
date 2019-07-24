import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Swimming Contest</Text>
        <Text style={styles.paragraph1}>
         Participate in the swimming contest if you are a good swimmer and compete with other swimmers in the national pool.                                                                                  Date : 8/1
                                                                                                        
        </Text>
        <Text style={styles.paragraph1}>Location : Bethlahem - Al-Mahd Street</Text>
        <Text style={styles.paragraph1}>Telephone : 092356487</Text>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://www.cejoanmiro.cat/wp-content/uploads/2012/07/0K2A3010.jpg',
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
    //margin: 0,
    //marginTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 70,
    width: 70,
  },
});
