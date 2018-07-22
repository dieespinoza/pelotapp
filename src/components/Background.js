import { List, ListItem } from 'react-native-elements';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,ImageBackground } from 'react-native';



export class Background extends React.Component{
	render(){
		return(
			<ImageBackground source = {require('../../app/img/prueba.jpg')}
				style={{width:'100%', height:'100%',alignItems:'center',justifyContent:'center'}}>
	
			{this.props.children}
			<View style={styles.barra}>
			<Text style={styles.button}>QUE SUCEDE</Text>
			</View>
			</ImageBackground>

			);
	}
}
 const styles = StyleSheet.create({
    barra: {
        flexDirection : 'row',
        justifyContent:'center',
    },
    button:{
    	width:100,
    	height:30,
    	backgroundColor:'blue',
    	alignItems:'center',
    	marginBottom:0,
    }

});


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