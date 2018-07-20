import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,ImageBackground} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {Background} from './clases/Background';

export default class App extends React.Component {
  render() {
    return (
      <Background>
        <View style={styles.inner}>
          <Text style={styles.letras}>
            Si funcionono
                      </Text>
          <Text style={styles.letritas}>
          Probando esta cosa
          </Text>
          </View>
      </Background>
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
    color : 'red',
  },
   letritas:{
    fontSize: 15,
    textAlign : 'center',
    color : 'red',

  },
   inner:{
    justifyContent: 'center',
    alignItems:'center',
    width:'95%',
    height : '95%',
    backgroundColor : 'rgba(0,0,0, .7)'

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

