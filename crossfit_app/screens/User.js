import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Button, Overlay } from 'react-native-elements'
import { uploadData } from '../service/LoginServices';
import { uploadDetail } from '../service/LoginServices';
import { uploadProfile } from '../service/LoginServices';
import { useFocusEffect } from '@react-navigation/native';

import {Picker} from '@react-native-picker/picker';

import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

import Banner from '../components/Banner'
import Profile from '../components/Profile'
import { render } from 'react-dom';

const image = {uri:'../assets/logo.jpg'};

export default function User({navigation}) {
    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("8:00 - 9:00");

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [back_squat, setBackSquat] = useState('');
    const [clean, setClean] = useState('');
    const [clean_jerk, setCleanJerk] = useState('');
    const [snatch, setSnatch] = useState('');
    const [deadlift, setDeadlift] = useState('');
    const [pull_ups, setPullUps] = useState('');
    const [fran, setFran] = useState('');
    const [city, setCity] = useState('');
    const [division, setDivision] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [biography, setBiography] = useState('');
    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const user = global.emailUsuario;

    Moment.locale('en');

    useFocusEffect(() => {
        uploadData(upload_data, user);
        uploadProfile(upload_profile, user);
        uploadDetail(upload_detail, user);
    });

    const upload_data = (data) => {
        setName(data.name)
        setLast(data.last)
    }

    const upload_profile = (data) => {
        setCity(data.city)
        setDivision(data.division)
        setAge(data.age)
        setHeight(data.height)
        setWeight(data.weight)
        setBiography(data.biography)
    }

    const upload_detail = (data) => {
        setBackSquat(data.back_squat)
        setClean(data.clean)
        setCleanJerk(data.clean_jerk)
        setSnatch(data.snatch)
        setDeadlift(data.deadlift)
        setPullUps(data.pull_ups)
        setFran(data.fran)
    }

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
                    <Banner 
                        name = {name} setName = {(name) => setName(name)}
                        last = {last} setLast = {(last) => setLast(last)}
                    />
                    <Profile 
                        city = {city} setCity = {(city) => setCity(city)}
                        division = {division} setDivision = {(division) => setDivision(division)}
                        age = {age} setAge = {(age) => setAge(age)}
                        height = {height} setHeight = {(height) => setHeight(height)}
                        weight = {weight} setWeight = {(weight) => setWeight(weight)}
                        biography = {biography} setBiography = {(biography) => setBiography(biography)}
                        back_squat = {back_squat} setBackSquat = {(back_squat) => setBackSquat(back_squat)}
                        clean = {clean} setClean = {(clean) => setClean(clean)}
                        clean_jerk = {clean_jerk} setCleanJerk = {(clean_jerk) => setCleanJerk(clean_jerk)}
                        snatch = {snatch} setSnatch = {(snatch) => setSnatch(snatch)}
                        deadlift = {deadlift} setDeadlift = {(deadlift) => setDeadlift(deadlift)}
                        pull_ups = {pull_ups} setPullUps = {(pull_ups) => setPullUps(pull_ups)}
                        fran = {fran} setFran = {(fran) => setFran(fran)}
                    />
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