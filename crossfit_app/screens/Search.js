import React from "react";
import { StyleSheet, StatusBar } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import User from './User'
import SearchUser from './SearchUser'

const NavStack = createStackNavigator();

export default function Search() {
    return (
        <NavStack.Navigator initialRouteName="SearchUser">
            <NavStack.Screen
                name="SearchUser"
                component={SearchUser}
                options={{
                    title: "Buscar Usuario"
                }}
            />
            <NavStack.Screen
                name="User"
                component={User}
                options={({ route }) => ({ title: route.params.title })}
                // options={{
                //     title: "Usuario"
                // }}
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
