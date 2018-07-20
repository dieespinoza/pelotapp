
import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, ImageBackground, Button } from 'react-native';
import { MatchScreen } from './pibe_modules/match_screen';
import { PartidoScreen } from './pibe_modules/partido';
import { createStackNavigator } from 'react-navigation';
import {provider} from 'react-redux';
import {createStore} from 'redux';
  
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'The dream begin',
    // header: null,
    
  };
  render() {
    return (
      
      <ImageBackground source={require('./app/img/prueba.jpg')}
        style={styles.container}>
        <View style={styles.inner}>
          
          <Button
            title="Match"
            style={styles.inner}
            onPress={() => this.props.navigation.navigate('MatchScreen')}
          />
          <Button
            title="Tournament"
            onPress={() => this.props.navigation.navigate('MatchScreen')}
          />
          <Button
            title="Profile"
            onPress={() => this.props.navigation.navigate('MatchScreen')}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('MatchScreen')}
          />
        </View>


      </ImageBackground>



    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    MatchScreen: MatchScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letras: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  letritas: {
    fontSize: 15,
    textAlign: 'center',
    color: 'red',
  },
  inner: {
    width: '90%',
    height: '90%',
    backgroundColor: 'rgba(255,255,255, .7)'
  }
}
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}




