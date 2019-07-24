import * as React from 'react';
import {
 Text,
 View,
 StyleSheet,
 TouchableOpacity,
 ScrollView,
 FlatList,
 Image,
} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
export default class App extends React.Component {
 handlePress = index => {
   alert('You pressed ' + index);
 };
 getSource = item => {
   if ('src' in item) {
     return item.src;
   } else {
     return { uri: item.uri }; // Image component demands this fancy format
   }
 };
 render() {
   return (
     <ScrollView style={styles.container}>
       <Text style={styles.paragraph}>Categories</Text>
       <View style={{ flex: 1, flexDirection: 'row', alignItems:'center' }}>
         <Image
           style={styles.itemImage}
           source={require('../images/Educational.png')}
         />
         <TouchableOpacity style={styles.border1}>
           <Text style={{color:'white'}}>Educational</Text>
         </TouchableOpacity>
       </View>
       <View style={{ flex: 1, flexDirection: 'row', alignItems:'center' }}>
       <Image
         style={styles.itemImage}
         source={require('../images/sport.png')}
       />
       <TouchableOpacity style={styles.border2}>
         <Text style={{color:'white'}}>Sport</Text>
       </TouchableOpacity>
       </View>
       <View style={{ flex: 1, flexDirection: 'row', alignItems:'center' }}>
       <Image
         style={styles.itemImage}
         source={require('../images/tech.png')}
       />
       <TouchableOpacity style={styles.border3}>
         <Text style={{color:'white'}}>Technology</Text>
       </TouchableOpacity>
       </View>
       <View style={{ flex: 1, flexDirection: 'row', alignItems:'center' }}>
       <Image
         style={styles.itemImage}
         source={require('../images/science.png')}
       />
       <TouchableOpacity style={styles.border4}>
         <Text style={{color:'white'}}>Science</Text>
       </TouchableOpacity>
       </View>
     </ScrollView>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   padding: 8,
 },
 paragraph: {
   fontSize: 30,
   fontStyle: 'bold',
   textAlign: 'center',
   fontFamily: 'vincHand',
   marginBottom: 30,
 },
 itemImage: {
   width: 100,
   height: 100,
   margin: 20,
   aspectRatio: 1,
   alignItems: 'center',
   borderColor: 'white',
   borderWidth: 1,
   borderRadius: 100 / 10,
 },
 border1:{
   backgroundColor: '#F3CA3F',
   borderRadius: 100/10,
   padding: 10,
   margin: 1,
   height: 100,
   width: 200,
   fontSize: 38,
   color: 'white',
   justifyContent: 'center',
   alignItems: 'center',
 },
 border2:{
   backgroundColor: '#B0B0B0',
   borderRadius: 100/10,
   padding: 10,
   margin: 1,
   height: 100,
   width: 200,
   fontSize: 38,
   color: 'white',
   justifyContent: 'center',
   alignItems: 'center',
 },
 border3:{
   backgroundColor: '#F3CA3F',
   borderRadius: 100/10,
   padding: 10,
   margin: 1,
   height: 100,
   width: 200,
   fontSize: 38,
   color: 'white',
   justifyContent: 'center',
   alignItems: 'center',
 },
 border4:{
   backgroundColor: '#B0B0B0',
   borderRadius: 100/10,
   padding: 10,
   margin: 1,
   height: 100,
   width: 200,
   fontSize: 38,
   color: 'white',
   justifyContent: 'center',
   alignItems: 'center',
 },
});