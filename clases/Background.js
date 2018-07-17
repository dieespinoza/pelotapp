import { List, ListItem } from 'react-native-elements';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,ImageBackground} from 'react-native';



export class Background extends React.Component{
	render(){
		return(
			<ImageBackground source = {require('../app/img/prueba.jpg')}
				style={styles.container}>
			
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
  }
}
  );

export default {Background}