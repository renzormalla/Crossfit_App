import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'

import BannerEdit from '../components/BannerEdit'
import ProfileEdit from '../components/ProfileEdit'

const image = {uri:'../assets/logo.jpg'};

export default function User({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.jpg')} style={styles.backgroundImage}/>
            {/* <ImageBackground source={require('../assets/logo.jpg')}> */}
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <BannerEdit />
                    <ProfileEdit />
                    <View style={styles.containerButton}>
                        <Button
                            buttonStyle={styles.button}
                            title='Guardar'
                            // onPress={() => {
                            //     navigation.navigate("UserEdit")
                            // }}
                        />
                    </View>
                </ScrollView>
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
    },
    button: {
        marginVertical: 30,
        marginHorizontal: 30,
        borderRadius: 10, 
        width:100, 
        backgroundColor:'#f2b90a'
    },
    containerButton: {
        flexDirection: "row",
        backgroundColor: 'rgba(250, 250, 250, .9)',
        justifyContent: 'center'
    }
});