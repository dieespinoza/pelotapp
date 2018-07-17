import { List, ListItem } from 'react-native-elements';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry} from 'react-native';
import {  createStackNavigator,} from 'react-navigation';

const list = [
  {
    name: 'Julia Zapata',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Soccer 5 vs 5'
  },
  {
    name: 'Diego Espinoza',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Soccer 11 vs 11'
  }
]

export class ListMatch extends React.Component {
  render() {
    return (
      
      <View style={{flex: 1}}>

           <List  style={{flex: 1, backgroundColor: 'powderblue'}} >
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
</List>

      </View>
    );  
  }
}

export default  {ListMatch}