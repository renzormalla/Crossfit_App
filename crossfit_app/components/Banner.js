import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements'


export default function Banner() {
    return (
        <View style={styles.container}>
            <Avatar
                size="xlarge"
                rounded
                title="NA"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle = {styles.avatar}
            />
            <View style={styles.textLetfRight}>
                <View style={{flex: 1}}>
                    <Text h3>Nombre</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'right', marginRight: 20}} h3 >Apellido</Text>
                </View>
            </View>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 130,
        width: '100%',
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(250, 250, 250, .9)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    avatar: {
        marginHorizontal: 10,
        backgroundColor: '#daf',
        width: 120,
        height: 120,
    },
    textLetfRight: {
        marginVertical: 20,
        flex: 1,
        width:'100%',
    }
});