import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';

import Banner from '../components/Banner'
import Profile from '../components/Profile'


export default function User({navigation}) {
    return (
        <View style={styles.container}>
            <Banner />
            <Profile />
            
        </View>
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
});