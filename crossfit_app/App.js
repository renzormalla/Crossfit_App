import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import { cargarFirebaseConfig } from './service/FirebaseConfig'
import firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

const NavStack = createStackNavigator();
// const NavTab = createBottomTabNavigator();
const NavDrawer = createDrawerNavigator();

import Login from './screens/Login'
import Home from './screens/Home'
import CreateUser from './screens/CreateUser'

export default function App() {
  
  const [login, setLogin] = useState(false)

  if(!global.FirebaseConfigurado){
    cargarFirebaseConfig();
  }
  firebase.auth().onAuthStateChanged((usuario) => {
    if(usuario) {
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
                    color='#517fa4'
                  />
                }
              }}/>
              <NavDrawer.Screen name="CreateUser" component={CreateUser} options={{
                drawerLabel: 'Crear Usuario',
                drawerIcon: () => {
                  return <Icon
                    name='user-plus'
                    type='font-awesome'
                    color='#517fa4'
                  />
                }
              }}/>
            </NavDrawer.Navigator>
          ) : (
            <NavStack.Navigator>
              <NavStack.Screen name="Login" component={Login}/>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
