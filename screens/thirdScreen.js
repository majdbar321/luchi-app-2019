import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import FlatListData from './flatListData.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // for error checking
    this.params = this.props.navigation.state.params;
    console.log(this.params); // for debugging.
  }
  state = {
    userName: '',
  };
  gotoScreenFour = () => {
    this.props.navigation.navigate('Settings');
  };
  render() {
    return (
      <FlatList
        data={FlatListData['catpics']}
        renderItem={({ item, index }) => (
          <ScrollView style={styles.container}>
            <Image
              source={{
                uri: '',
              }}
              style={styles.profile}
            />
            <Text style={styles.name}>{this.params.userName} </Text>
            <Text style={styles.name}>{this.params.age} </Text>
            <TouchableOpacity onPress={this.gotoScreenFour}>
              <Image
                source={require('../images/setting-512.png')}
                style={styles.image1}
              />
            </TouchableOpacity>
            <Text style={styles.old}>{this.params.age}</Text>
            <Text style={{ bottom: 38, color: 'blue' }}>
              ________________________________________________________
            </Text>
            <Text style={{ bottom: 40, color: 'red' }}>
              _______________________
            </Text>
            <Image
              source={require('../images/paltel.png')}
              style={styles.itemImage}
            />
            <Text style={styles.comp}>Paltel Group Fundation</Text>
            <Text style={styles.comp1}>Ages: 14-16</Text>
            <Text style={styles.comp2}>Technology</Text>
            <Image source={require('../images/pal.jpg')} style={styles.pgf} />
            <Text style={{ bottom: 0, color: 'blue' }}>
              ________________________________________________________
            </Text>
            <Text style={{ bottom: 0, color: 'red' }}>
              _______________________
            </Text>
            <Text style={styles.comp3}>Sport England</Text>
            <Text style={styles.comp4}>Ages: 12-17</Text>
            <Text style={styles.comp5}>Sport & Activity Insurance</Text>
            <Image source={item.source} style={styles.itemImage} />
            <Image
              source={require('../images/sportengland.jpg')}
              style={styles.pgf}
            />
          </ScrollView>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'White',
    // padding: 8,
  },
  name: {
    bottom: 40,
    left: 70,
    fontSize: 17,
    textAlign: 'center',
  },
  old: {
    bottom: 50,
    left: 70,
    fontSize: 17,
    textAlign: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    top: 40,
    left: 30,
    borderRadius: 100 / 2,
  },
  image1: {
    width: 20,
    height: 20,
    bottom: 100,
    left: 330,
  },

  comp: {
    left: 80,
    bottom: 70,
    fontSize: 17,
    textAlign: 'center',
  },
  comp1: {
    left: 40,
    bottom: 70,
    fontSize: 17,
    textAlign: 'center',
  },
  comp2: {
    left: 40,
    bottom: 70,
    fontSize: 17,
    textAlign: 'center',
  },
  pgf: {
    bottom: 1,
    height: 200,
    width: 400,
    // alignSelf: 'stretch',
  },
  itemImage: {
    width: 100,
    aspectRatio: 1,
    alignItems: 'center',
    height: 100,
  },
  comp3: {
    left: 35,
    top: 80,
    fontSize: 17,
    textAlign: 'center',
  },
  comp4: {
    left: 25,
    top: 80,
    fontSize: 17,
    textAlign: 'center',
  },
  comp5: {
    left: 80,
    top: 80,
    fontSize: 17,
    textAlign: 'center',
  },
});
