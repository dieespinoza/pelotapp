import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry,ImageBackground} from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./app/img/prueba.jpg')} 
          style={styles.container}>
           <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
            />
          ))
        }
        </List>
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

