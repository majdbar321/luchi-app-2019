import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from '../assets/AssetExample';
import AssetExample1 from '../assets/AssetExample1';
import AssetExample2 from '../assets/AssetExample2';
import AssetExample3 from '../assets/AssetExample3';
import AssetExample4 from '../assets/AssetExample4';

import { Card } from 'react-native-paper';

export default class SecondScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.paragraph}>
          Suggestions for you
        </Text>
        <Card style ={styles.cards}>
          <AssetExample />
        </Card>
        <Card style ={styles.cards}>
          <AssetExample1 /> 
        </Card>
        <Card style ={styles.cards}>
          <AssetExample2 />
        </Card>
        <Card style ={styles.cards}>
          <AssetExample3 />
        </Card>
        <Card style ={styles.cards}>
          <AssetExample4 />
        </Card>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F3CA3F',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
        color: '',
  },
    cards: {
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
