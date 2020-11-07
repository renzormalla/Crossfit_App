import React, { useState } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { Card, Input, Button } from 'react-native-elements'
import { recuperarClave } from "../service/LoginServices";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CambioClave({navigation}) {

  const [email, setEmail] = useState('')
  const irLogin = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
          <Card.Title>CAMBIAR CONTRASEÑA</Card.Title>
          <Card.Divider/>
          <Input
              labelStyle={styles.input}
              label='Usuario'
              placeholder=' Escribe tu usuaro ...'
              onChangeText={(text) => setEmail(text)}
              value={email}
              leftIcon={ <Icon name='envelope' size={25} color='black'/> }
          />
          <Button buttonStyle={styles.button}
            title="Recuperar Contraseña"
            onPress={() => { recuperarClave(email,irLogin) }}
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
      marginVertical: 20,
      borderRadius: 10, 
      marginHorizontal: 50,
      backgroundColor:'#f2b90a'
  },
});
