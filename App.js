import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {Background} from './clases/Background';

export default class App extends React.Component {
  render() {
    return (
      <Background>
          <Text style={styles.letras}>
            hola
          </Text>
      </Background>
    );
  }
}



const styles = StyleSheet.create({
  
  letras:{
    fontSize: 20,
    textAlign : 'center',
    color : 'black',
  },
   letritas:{
    fontSize: 15,
    textAlign : 'center',
    color : 'red',
  },
   inner:{
    width:'90%',
    height : '90%',
    backgroundColor : 'rgba(255,255,255, .7)'

  }

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

