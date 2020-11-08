import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, View, Image, Button, YellowBox } from 'react-native';
import { Avatar, Text } from 'react-native-elements'
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import uploadData from '../service/LoginServices'
import { set } from 'react-native-reanimated';

export default function Banner() {

    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const user = global.emailUsuario;

    useEffect(() => {
        uploadData(upload, user);
    });

    const upload = (data) => {
        setName(data.name)
        setLast(data.last)
    }


    const test = firebase.storage().ref().child(user).getDownloadURL()
    .then((res) => {
        setImage(res);
    })
    .catch(error => {
        console.log("empty")
    });

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
        const uploadUrl = await uploadImageAsync(result.uri, user);
        await setImage(result.uri);
    }
    
  };

  return (

    <View style={styles.container}>
            <Avatar
                size="xlarge"
                rounded
                title="NA"
                activeOpacity={0.7}
                containerStyle = {styles.avatar}
                onPress={pickImage}
                source={{ uri: image }}
            />
            <View style={styles.textLetfRight}>
                <View style={{flex: 1}}>
                    <Text h3>{ name }</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'right', marginRight: 20}} h3 >{ last }</Text>
                </View>
            </View>
        </View>
  );
}

// async function uploadImageAsync(uri, user) {
//     const blob = await new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = function() {
//         resolve(xhr.response);
//       };
//       xhr.onerror = function(e) {
//         console.log(e);
//         reject(new TypeError('Network request failed'));
//       };
//       xhr.responseType = 'blob';
//       xhr.open('GET', uri, true);
//       xhr.send(null);
//     });
  
//     const ref = firebase
//       .storage()
//       .ref()
//       .child(user);
//     const snapshot = await ref.put(blob);
  
//     // We're done with the blob, close and release it
//     blob.close();
  
//     return await snapshot.ref.getDownloadURL();
// }
    
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