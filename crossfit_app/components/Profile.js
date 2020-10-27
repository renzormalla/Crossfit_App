import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Text, Button, Overlay  } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';

import ProfileEdit from './ProfileEdit'

import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Profile() {
    let numColumns = 6;
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
            <View style={styles.containerList}>
                <FlatList 
                    data={[
                    {key: 'CITY', value: 'Quito'},
                    {key: 'DIVISION', value: 'Women'},
                    {key: 'AGE', value: '34'},
                    {key: 'HEIGHT', value: '162 cm'},
                    {key: 'WEIGHT', value: '59 kg'},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.itemStyle}>
                            <Text style={styles.itemTitle}>{item.key}</Text>
                            <Text style={{fontSize: 15}}>{item.value}</Text>
                        </View>
                    }
                    numColumns={numColumns}
                />
            </View>
            <View>
                <Text h4 style={styles.bioTitle} > Biografia</Text>
                <Text style={styles.bio} > A native of Oslo, Norway, Kristin Holte is a three-time CrossFit Games veteran. After starting CrossFit in 2012, she took seventh in her first regional appearance at the 2013 Europe Regional. She has qualified for the Games every year since, consistently finishing in the top 17 with a career-best finish of 2nd in 2019. A former gymnast and endurance athlete, Holte is a nutritionist by profession. </Text>
            </View>
            <ProfileEdit />
            <View style={{flexDirection: "row",}}>
                <Button
                    buttonStyle={styles.button}
                    title='Editar'
                    // onPress={alert("Editar")}
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
            
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        // backgroundColor: 'transparent',
        backgroundColor: 'rgba(250, 250, 250, .9)',
        alignItems: 'center',
    },
    containerList: {
        flexDirection: "row",
        height: 70,
        width: '100%',
        // backgroundColor: 'rgba(87, 87, 87, 0.7)',
        alignItems: 'center',
        paddingVertical: 5,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 1,
    },
    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:25,
    },
    itemTitle: {
        fontWeight: "bold",
        fontSize: 15
    },
    bioTitle: {
        marginTop:10,
    },
    bio:{
        marginTop:10,
        paddingHorizontal:20,
        textAlign: "justify"
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
    buttonDate: {
        marginHorizontal: 30, 
        marginVertical: 5,
        backgroundColor:'#f2b90a'
    },
    selectHour: {
        marginHorizontal: 50,
        height: 50, 
        width: 150
    }
});