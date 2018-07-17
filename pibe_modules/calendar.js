import { Alert } from 'react-native';
import React,{Component} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
export class Calendario extends React.Component {
  render(){
    return (<CalendarList

    pagingEnabled={true}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={Date()}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={() => {Alert.alert('selected day')} }
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
/>);
  }
}
export default {Calendario}
{/*    <CalendarList
    pagingEnabled={true}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2018-07-17'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={() => {Alert.alert('selected day')} }
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
/>*/}