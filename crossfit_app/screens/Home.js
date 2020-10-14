import React from 'react';
import { StyleSheet, StatusBar, View} from 'react-native';
import { Card, Input, Button } from 'react-native-elements'

import { createStackNavigator } from '@react-navigation/stack';

import User from './User'

const NavStack = createStackNavigator();

export default function Home() {
    return (
        <NavStack.Navigator initialRouteName="User">
            <NavStack.Screen
            name="User"
            component={User}
            options={{
                title: "Usuario"
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
        marginTop: StatusBar.currentHeight,
        flex: 1,
        width: '100%',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});