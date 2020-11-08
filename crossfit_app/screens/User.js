import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Button, Overlay } from 'react-native-elements'

import {Picker} from '@react-native-picker/picker';

import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

import Banner from '../components/Banner'
import Profile from '../components/Profile'

const image = {uri:'../assets/logo.jpg'};

export default function User({navigation}) {
    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("8:00 - 9:00");

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

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.jpg')} style={styles.backgroundImage}/>
            {/* <ImageBackground source={require('../assets/logo.jpg')}> */}
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Banner />
                    <Profile />
                    <View style={styles.containerButton}>
                        <Button
                            buttonStyle={styles.button}
                            title='Editar'
                            onPress={() => {
                                navigation.navigate("UserEdit")
                            }}
                        />
                        <Button
                            buttonStyle={styles.button}
                            title='Reservar'
                            onPress={toggleOverlay}
                        />
                        <Overlay overlayStyle={styles.overlay} isVisible={visible} onBackdropPress={toggleOverlay}>
                            <Text h4 style={{marginBottom:20, marginHorizontal:30,}}>Elige fecha y hora</Text>
                            {/* <Button buttonStyle={styles.buttonDate} onPress={showTimepicker} title={ "Hora:  " + Moment(date).format('HH:MM')} /> */}

                            <Button buttonStyle={styles.buttonDate} onPress={showDatepicker} title={ "Fecha:  " + Moment(date).format('DD-MM-YYYY')} />
                            {
                                Moment(date).format('dddd') == 'Saturday' || Moment(date).format('dddd') == 'Sunday' ? (
                                    <Picker
                                        selectedValue={selectedValue}
                                        style={styles.selectHour}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                    >
                                        <Picker.Item label="8:00" value="8:00" />
                                        <Picker.Item label="9:00" value="9:00" />
                                    </Picker>
                                ) : (
                                    <Picker
                                        selectedValue={selectedValue}
                                        style={styles.selectHour}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                    >
                                        <Picker.Item label="6:00" value="6:00" />
                                        <Picker.Item label="7:00" value="7:00" />
                                        <Picker.Item label="8:00" value="8:00" />
                                        <Picker.Item label="9:00" value="9:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                    </Picker>
                                )
                            }                            
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
                        </Overlay>
                    </View>
                </ScrollView>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode:'stretch',
        position: 'absolute',
        justifyContent: 'center',
    },
    button: {
        marginVertical: 30,
        marginHorizontal: 30,
        borderRadius: 10, 
        width:100, 
        backgroundColor:'#f2b90a'
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'90%',
        height:'40%'
    },
    containerButton: {
        flexDirection: "row",
        backgroundColor: 'rgba(250, 250, 250, .9)',
        justifyContent: 'center'
    }
});