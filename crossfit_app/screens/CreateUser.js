import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView , ScrollView, Dimensions  } from 'react-native';
import { Card, Input, Button } from 'react-native-elements'
import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CreateUser() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    Moment.locale('es');

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


    return (
        <SafeAreaView  style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Card containerStyle={styles.card}>
                    <Card.Title h4 >Crear Usuario</Card.Title>
                    <Card.Divider/>
                    <Input
                        labelStyle={styles.input}
                        label='Nombre'
                        placeholder=' Escriba el nombre ...'
                    />
                    <Input
                        labelStyle={styles.input}
                        label='Apellido'
                        placeholder=' Escriba el apellido ...'
                    />
                    <Button buttonStyle={styles.buttonDate} onPress={showDatepicker} title={ "Fecha Nacimiento:  " + Moment(date).format('DD MMMM YYYY')} />
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
                    <Input
                        labelStyle={styles.input}
                        label='Rol'
                        placeholder=' Seleccione el rol ...'
                    />
                    <Input
                        labelStyle={styles.input}
                        label='Correo'
                        placeholder=' Escriba el correo ...'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <Input
                        labelStyle={styles.input}
                        label='Contrasña'
                        placeholder=' Escribe tu contraseña ...'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        leftIcon={ <IconFontAwesome name='lock' size={25} color='black'/> }
                        secureTextEntry={true}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title=' CREAR'
                        // onPress={() => onLoginPress()}
                    />
                </Card>
            </ScrollView>
        </SafeAreaView >
    );
}
    
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible'
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    card: {
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        width: '90%',
        backgroundColor: '#fff'
    },
    input:{
        marginTop: 10,
    },
    buttonDate: {
        marginHorizontal: 15, 
        marginVertical: 5,
    },
    button: {
        marginVertical: 30,
        borderRadius: 10, 
        marginHorizontal: 50, 
    }
});