import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Button, Overlay } from 'react-native-elements'
import { uploadData } from '../service/LoginServices';
import { uploadDetail } from '../service/LoginServices';
import { uploadProfile } from '../service/LoginServices';
import { useFocusEffect } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { create_reserve } from '../service/LoginServices'


import Moment from 'moment';

import Banner from '../components/Banner'
import Profile from '../components/Profile'
import Reserve from '../components/Reserve';

const image = {uri:'../assets/logo.jpg'};

export default function User({navigation, route}) {
    const [visible, setVisible] = useState(false);

    const [monday, setMonday] = useState('none');
    const [tuesday, setTuesday] = useState('none');
    const [wednesday, setWednesday] = useState('none');
    const [thursday, setThursday] = useState('none');
    const [friday, setFriday] = useState('none');
    const [saturday, setSaturday] = useState('none');
    const [sunday, setSunday] = useState('none');

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

    const [user, setUser] = useState(global.emailUsuario);
    
    Moment.locale('en');

    useFocusEffect(() => {
        if (route.params) {
            setUser(route.params.userEmail)
            console.log("CORREO: ", route.params.userEmail)
        }
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
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Banner user = {user}
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
                    {
                        !route.params ? (
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
                                <View>
                                    <Text h4 style={{marginBottom:20, marginHorizontal:30}}>Reservación de fechas</Text>
                                    <DataTable style={styles.dataTable}>
                                        <DataTable.Header>
                                            <DataTable.Title > Día      </DataTable.Title>
                                            <DataTable.Title > Hora     </DataTable.Title>
                                        </DataTable.Header>

                                        <DataTable.Row>
                                            <DataTable.Cell > Lunes    </DataTable.Cell>
                                            <DataTable.Cell >
                                                <Reserve
                                                    selectedValue = {monday}
                                                    setSelectedValue = {(monday) => setMonday(monday)}
                                                    day = 'Monday'
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>

                                        <DataTable.Row>
                                            <DataTable.Cell > Martes    </DataTable.Cell>
                                            <DataTable.Cell >
                                                <Reserve
                                                    selectedValue = {tuesday}
                                                    setSelectedValue = {(tuesday) => setTuesday(tuesday)}
                                                    day = 'Tuesday'
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                        
                                        <DataTable.Row>
                                            <DataTable.Cell > Miercoles   </DataTable.Cell>
                                            <DataTable.Cell >
                                                <Reserve
                                                    selectedValue = {wednesday}
                                                    setSelectedValue = {(wednesday) => setWednesday(wednesday)}
                                                    day = 'Wednesday'
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>

                                        <DataTable.Row>
                                            <DataTable.Cell > Jueves    </DataTable.Cell>
                                            <DataTable.Cell >
                                                <Reserve
                                                    selectedValue = {thursday}
                                                    setSelectedValue = {(thursday) => setThursday(thursday)}
                                                    day = 'Thursday'
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>

                                        <DataTable.Row>
                                            <DataTable.Cell > Viernes    </DataTable.Cell>
                                            <DataTable.Cell >
                                                <Reserve
                                                    selectedValue = {friday}
                                                    setSelectedValue = {(friday) => setFriday(friday)}
                                                    day = 'Friday'
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>

                                        <DataTable.Row>
                                            <DataTable.Cell > Sábado    </DataTable.Cell>
                                            <DataTable.Cell >
                                                <Reserve
                                                    selectedValue = {saturday}
                                                    setSelectedValue = {(saturday) => setSaturday(saturday)}
                                                    day = 'Saturday'
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>

                                        <DataTable.Row>
                                            <DataTable.Cell > Domingo    </DataTable.Cell>
                                            <DataTable.Cell >
                                                <Reserve
                                                    selectedValue = {sunday}
                                                    setSelectedValue = {(sunday) => setSunday(sunday)}
                                                    day = 'Sunday'
                                                />
                                            </DataTable.Cell>
                                        </DataTable.Row>
                                    </DataTable>
                                    <Button
                                        buttonStyle={styles.button}
                                        title='Guardar'
                                        onPress={() => {
                                            //Guardar firebase
                                            toggleOverlay()
                                            create_reserve(user, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
                                        }}
                                    />
                                </View>                                
                            </Overlay>
                        </View>
                        ) : (undefined)
                    }
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
        flex:1,
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        height:'80%'
    },
    containerButton: {
        flexDirection: "row",
        backgroundColor: 'rgba(250, 250, 250, .9)',
        justifyContent: 'center'
    },
    dataTable: {
        width: Dimensions.get('window').width - 100,
    }
});