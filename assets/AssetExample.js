import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Eibal</Text>
        <Text style={styles.paragraph1}>
         This Football club provides opportunities for teenagers from ages 12-19 to perform their football skills.                                                                                      Date : 7/15 - 8/14
                                                                                                        
        </Text>
        <Text style={styles.paragraph1}>Location : Nablus - Rafidia</Text>
        <Text style={styles.paragraph1}>Telephone : 092356487</Text>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://pvpanthers.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2017/2/7/Soccer_Field_1.jpeg',
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
    marginTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 70,
    width: 70,
  },
});
