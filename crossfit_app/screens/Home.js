import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import User from './User'
import UserEdit from './UserEdit'

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
            <NavStack.Screen
                name="UserEdit"
                component={UserEdit}
                options={{
                    title: "Editar Usuario"
                }}
            />
        </NavStack.Navigator>
    );
}
    
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        // backgroundColor: '#eeeeee',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});