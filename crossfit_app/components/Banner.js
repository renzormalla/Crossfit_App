import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements'


export default function Banner() {
    return (
        <View style={styles.container}>
            <Avatar
                size="large"
                rounded
                title="MT"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle = {styles.avatar}
            />
            <Text h3>Nombre Apellido</Text>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 100,
        width: '100%',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        paddingVertical: 5,
    },
    avatar: {
        marginHorizontal: 10,
        backgroundColor: '#daf'
    }
});