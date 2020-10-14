import React, { useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Card, Input, Button } from 'react-native-elements'

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { ingresar } from '../service/LoginServices'

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/> */}
            <Card containerStyle={styles.card}>
                <Card.Title>INICIO DE SESIÓN</Card.Title>
                <Card.Divider/>
                <Input
                    labelStyle={styles.input}
                    label='Usuario'
                    placeholder=' Escribe tu usuaro ...'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    leftIcon={ <IconAntDesign name='user' size={25} color='black'/> }
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
                    title=' INGRESAR'
                    onPress={() => {ingresar(email, password)}}
                />
            </Card>

        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        width: '100%',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    card: {
        borderRadius: 20,
        marginVertical: 100,
        width: '80%',
        backgroundColor: '#fff'
    },
    input:{
        marginTop: 30,
    },
    button: {
        marginVertical: 30,
        borderRadius: 10, 
        marginHorizontal: 50, 
    }
});
    