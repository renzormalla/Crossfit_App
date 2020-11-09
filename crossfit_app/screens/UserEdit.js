import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'

import BannerEdit from '../components/BannerEdit'
import ProfileEdit from '../components/ProfileEdit'
import { update_user } from '../service/LoginServices';
const image = {uri:'../assets/logo.jpg'};

export default function User({navigation}) {
    const [back_squat, setBackSquat] = useState('');
    const [clean, setClean] = useState('');
    const [clean_jerk, setCleanJerk] = useState('');
    const [snatch, setSnatch] = useState('');
    const [deadlift, setDeadlift] = useState('');
    const [pull_ups, setPullUps] = useState('');
    const [fran, setFran] = useState('');
    const [city, setCity] = useState('');
    const [division, setDivision] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [biography, setBiography] = useState('');
    // const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const email = global.emailUsuario;
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.jpg')} style={styles.backgroundImage}/>
            {/* <ImageBackground source={require('../assets/logo.jpg')}> */}
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <BannerEdit 
                        name = {name} setName = {(name) => setName(name)}
                        last = {last} setLast = {(last) => setLast(last)}
                    />
                    <ProfileEdit
                        city = {city} setCity = {(city) => setCity(city)}
                        division = {division} setDivision = {(division) => setDivision(division)}
                        age = {age} setAge = {(age) => setAge(age)}
                        height = {height} setHeight = {(height) => setHeight(height)}
                        weight = {weight} setWeight = {(weight) => setWeight(weight)}
                        biography = {biography} setBiography = {(biography) => setBiography(biography)}
                        back_squat = {back_squat} setBackSquat = {(back_squat) => setBackSquat(back_squat)}
                        clean = {clean} setClean = {(clean) => setClean(clean)}
                        clean_jerk = {clean_jerk} setCleanJerk = {(clean_jerk) => setCleanJerk(clean_jerk)}
                        snatch = {snatch} setSnatch = {(snatch) => setSnatch(snatch)}
                        deadlift = {deadlift} setDeadlift = {(deadlift) => setDeadlift(deadlift)}
                        pull_ups = {pull_ups} setPullUps = {(pull_ups) => setPullUps(pull_ups)}
                        fran = {fran} setFran = {(fran) => setFran(fran)}
                    />
                    <View style={styles.containerButton}>
                        <Button
                            buttonStyle={styles.button}
                            title='Guardar'
                            onPress={() => {
                                update_user(name, last, email, city, division, age, height, weight, biography, back_squat, clean, clean_jerk, snatch, deadlift, pull_ups, fran)
                                navigation.navigate("User")
                            }}
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