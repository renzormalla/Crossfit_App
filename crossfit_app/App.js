import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import Login from './components/login/login'
import User from './components/user/user'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Usuario" component={User} />
            {/* <Stack.Screen name="Registration" component={RegistrationScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Login />
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   <StatusBar style="auto" />
    // </View>
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
