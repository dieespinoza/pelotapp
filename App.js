import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        list.map((l, i) => (
        <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}

      />
    ))
        
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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

