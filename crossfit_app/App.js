import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import { cargarFirebaseConfig } from './service/FirebaseConfig'
import firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

const NavStack = createStackNavigator();
const NavDrawer = createDrawerNavigator();

import Login from './screens/Login'
import CambioClave from './screens/CambioClave'
import Home from './screens/Home'
import CreateUser from './screens/CreateUser'
import CerrarSesion from "./screens/CerraSesion";
import Search from "./screens/Search";
import Reserve from "./screens/Reserve";

export default function App() {

  const [login, setLogin] = useState(false)
  const [rol, setRol] = useState(false)

  if(!global.FirebaseConfigurado){
    cargarFirebaseConfig();
  }
  firebase.auth().onAuthStateChanged((usuario) => {
    if(usuario) {
      let user = firebase.firestore().collection('User').doc(usuario.email)
      user.get().then(function(doc){
        setRol(doc.data().rol)
      })
      global.emailUsuario=usuario.email
      setLogin(true)
    } else {
      setLogin(false)
    }
  })

  return (
    <NavigationContainer>
        {
          login ? (
            <NavDrawer.Navigator initialRouteName="Home">
              <NavDrawer.Screen name="Home" component={Home} options={{
                drawerLabel: 'Inicio',
                drawerIcon: () => {
                  return <Icon
                    name='home'
                    type='font-awesome'
                    color='#f2b90a'
                  />
                }
              }}/>
              <NavDrawer.Screen name="Search" component={Search} options={{
                drawerLabel: 'Buscar',
                drawerIcon: () => {
                  return <Icon
                    name='search'
                    type='font-awesome'
                    color='#f2b90a'
                  />
                }
              }}/>
              <NavDrawer.Screen name="Reserve" component={Reserve} options={{
                drawerLabel: 'Reservas',
                drawerIcon: () => {
                  return <Icon
                    name='calendar'
                    type='font-awesome'
                    color='#f2b90a'
                  />
                }
              }}/>
              {
                rol != "crossfiter" ? (
                  <NavDrawer.Screen name="CreateUser" component={CreateUser} options={{
                    drawerLabel: 'Crear Usuario',
                    drawerIcon: () => {
                      return <Icon
                        name='user-plus'
                        type='font-awesome'
                        color='#f2b90a'
                      />
                    }
                  }}/>
                ) : undefined
              }
              <NavDrawer.Screen name="CerrarSesion" component={CerrarSesion} options={{
                drawerLabel: 'Cerrar Sesion',
                drawerIcon: () => {
                  return <Icon
                    name='sign-out'
                    type='font-awesome'
                    color='#f2b90a'
                  />
                }
              }}/>
            </NavDrawer.Navigator>
          ) : (
            <NavStack.Navigator>
              <NavStack.Screen name="Login" component={Login}/>
              <NavStack.Screen name="CambioClave" component={CambioClave}/>
            </NavStack.Navigator>
          )
        }
      </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>

    //         <Stack.Screen name="Login" component={Login} />
    //         <Stack.Screen name="Crear Usuario" component={CreateUser} />

    //         <Stack.Screen name="Usuario" component={User} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
