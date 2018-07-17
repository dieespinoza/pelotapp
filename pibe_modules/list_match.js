import { List, ListItem } from 'react-native-elements';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,AppRegistry} from 'react-native';


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

export  class ListMatch extends React.Component {
  render() {
    return (
      
      <View style={{flex: 1,backgroundColor: 'lightblue'}}>

           <List  style={{flex: 1, backgroundColor: 'powderblue'}} >
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

      </View>
    );  
  }
}

export default  {ListMatch}