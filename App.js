
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,ImageBackground} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { ListMatch } from './pibe_modules/list_match';


export default class App extends React.Component {
  render() {
    return (

     <ImageBackground source={require('./app/img/prueba.jpg')} 
          style={styles.container}>
          <View style={styles.inner}>
          	<ListMatch/>

          </View>

      
      </ImageBackground>
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
  inner:{
    width:'90%',
    height : '90%',
    backgroundColor : 'rgba(255,255,255, .7)'}
  }
);


