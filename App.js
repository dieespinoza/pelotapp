
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { ListMatch } from './pibe_modules/list_match';


export default class App extends React.Component {
  render() {
    return (

      <View style={{flex: 1,backgroundColor: 'lightblue'}}>

      <ListMatch></ListMatch>
      </View>
    );  
  }
}






