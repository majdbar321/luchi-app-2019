import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>North Volly</Text>
        <Text style={styles.paragraph1}>
         This Vollyball tournament is for Vollyball's professionals who will compete for the championship                                                                                 Date : 10/3
                                                                                                        
        </Text>
        <Text style={styles.paragraph1}>Location : Nablus - Al-Makhfya</Text>
        <Text style={styles.paragraph1}>Telephone : 092346287</Text>
        <Image
          style={styles.logo}
          source={{
            uri:
              'http://www.ottawalife.com/admin/cms/images/large/preview-volleyball-nations-league-2018-at-td-place-arena-from-june-8-10-image-3-sanders-set.jpg',
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
