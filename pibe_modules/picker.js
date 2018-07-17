import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export class Fecha extends Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  render () {
    return (
      <View style={{ flex: 1 }}>
         <TouchableOpacity style={styles.button} onPress={this._showDateTimePicker}>
            <Text style={styles.text}>Seleccionar Fecha</Text>
         </TouchableOpacity>
         <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={'date'}
            is24Hour={false}
         />
      </View>


    );
  }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   button: {
      width: 150,
      height: 25,
      backgroundColor: '#330066',
      borderRadius: 30,
      justifyContent: 'center',
      marginTop: 100,
      marginLeft: 20
   },
   button2: {
      width: 150,
      height: 25,
      backgroundColor: '#330066',
      borderRadius: 30,
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: 200
   },
   text: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center'
   }
})

export default {Fecha}