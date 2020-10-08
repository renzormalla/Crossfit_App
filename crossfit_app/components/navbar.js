import React from 'react';
import { StyleSheet, StatusBar, View, Text} from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/> */}
            <Text>Esta es la Navbar</Text>
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
    },
});