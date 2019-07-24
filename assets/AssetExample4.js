import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Jericho Marathon</Text>
        <Text style={styles.paragraph1}>
         The Marathon of Jericho is around the corner, so get ready to participate and pick your distance.                                                                                  Date : 3/3 
                                                                                                        
        </Text>
        <Text style={styles.paragraph1}>Location : Jericho - Main Street</Text>
        <Text style={styles.paragraph1}>Telephone : 548616168</Text>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/620/Sub-Two+Hour+Half+Marathon+620.jpg',
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
