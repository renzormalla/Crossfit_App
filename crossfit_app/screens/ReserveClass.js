import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Text, Dimensions } from 'react-native';
import { Input, Button } from 'react-native-elements'

import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ReserveClass({navigation}) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    Moment.locale('en');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.container}>
            <Button buttonStyle={styles.buttonDate} onPress={showTimepicker} title={ "Hora:  " + Moment(date).format('HH:MM')} />
            <Button buttonStyle={styles.buttonDate} onPress={showDatepicker} title={ "Fecha:  " + Moment(date).format('DD-MM-YYYY')} />
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
            
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eeeeee',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDate: {
        // fontSize: 50, 
        // height:'25%',
        // paddingVertical:0,
        marginHorizontal: 20, 
        marginVertical: 5,
        backgroundColor:'#f2b90a'
    },
});