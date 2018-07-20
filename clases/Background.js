import { List, ListItem } from 'react-native-elements';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,ImageBackground } from 'react-native';



export class Background extends React.Component{
	render(){
		return(
			<ImageBackground source = {require('../app/img/prueba.jpg')}
				style={{width:'100%', height:'100%',alignItems:'center',justifyContent:'center'}}>
	
			{this.props.children}
			</ImageBackground>

			);
	}
}
// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         width: null,
//         height: null,
//         resizeMode: 'cover'
//     }
// });


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// }
//   );

export default {Background}