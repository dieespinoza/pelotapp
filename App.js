import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry} from 'react-native';
import {Calendario } from './pibe_modules/calendar';
import { Fecha } from './pibe_modules/picker';
import { List, ListItem } from 'react-native-elements';

export default class App extends React.Component {
  render() {
	return (
		<View style={styles.container}>
			<Fecha/>
		</View>
		);
	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letras:{
    fontSize: 20,
    textAlign : 'center',
    color : 'white',
  },
   letritas:{
    fontSize: 15,
    textAlign : 'center',
    color : 'red',
  },
  }
);



const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

