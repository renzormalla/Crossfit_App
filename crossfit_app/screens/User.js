import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Banner from '../components/Banner'
import Profile from '../components/Profile'

const image = {uri:'../assets/logo.jpg'};

export default function User({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.jpg')} style={styles.backgroundImage}/>
            {/* <ImageBackground source={require('../assets/logo.jpg')}> */}
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Banner />
                    <Profile />
                </ScrollView>    
            {/* </ImageBackground>             */}
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode:'stretch',
        position: 'absolute',
        justifyContent: 'center',
    }
});