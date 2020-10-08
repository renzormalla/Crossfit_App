import React from 'react';
import { StyleSheet, StatusBar, View} from 'react-native';
import { Card, Input, Button } from 'react-native-elements'

import Navbar from '../navbar'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';


export default function User({navigation}) {
    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/> */}
            <Navbar />
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
});