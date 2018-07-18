
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,ImageBackground,Button} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { ListMatch } from './pibe_modules/list_match';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (

    	   <ImageBackground source={require('./app/img/prueba.jpg')} 
          style={styles.container}>
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pibe</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ListMatch')}
        />
      </View>

      
      </ImageBackground>

      
     
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    ListMatch: ListMatch,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }}

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


