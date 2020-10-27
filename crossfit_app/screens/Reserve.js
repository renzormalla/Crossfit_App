import React from 'react';
import { StyleSheet, StatusBar, View, Text, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ReserveClass from './ReserveClass'

const NavStack = createStackNavigator();

export default function Reserve() {
    return (
        <NavStack.Navigator initialRouteName="ReserveClass">
            <NavStack.Screen
            name="ReserveClass"
            component={ReserveClass}
            options={{
                title: "Reservas"
            }}
            />
            {/* <NavStack.Screen
            name="Mapa"
            component={Mapa}
            options={{
                title: "Mapa"
            }}
            /> */}
        </NavStack.Navigator>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eeeeee',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
});