import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Dimensions, TextInput, SafeAreaView   } from 'react-native';
import { Text } from 'react-native-elements'
import { uploadProfile } from '../service/LoginServices';
import ProfileDetailEdit from './ProfileDetailEdit'
//////////////////
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
//////////////////
export default function ProfileEdit({back_squat, clean, clean_jerk, snatch, deadlift, pull_ups, fran, 
    setBackSquat, setClean, setCleanJerk, setSnatch, setDeadlift, setPullUps, setFran, city, division, age, 
    height, weight, biography, setAge, setCity, setDivision, setHeight, setWeight, setBiography}) {
        let numColumns = 6;

        const user = global.emailUsuario;

    useEffect(() => {
        uploadProfile(upload, user);
    }, []);

    const upload = (data) => {
        setCity(data.city)
        setDivision(data.division)
        setAge(data.age)
        setHeight(data.height)
        setWeight(data.weight)
        setBiography(data.biography)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView  style={styles.containerList}>
                <FlatList 
                    data={[
                    {key: 'CITY', value: city, func: (text) => setCity(text)},
                    {key: 'DIVISION', value: division, func: (text) => setDivision(text)},
                    {key: 'AGE', value: age, func: (text) => setAge(text)},
                    {key: 'HEIGHT', value: height, func: (text) => setHeight(text)},
                    {key: 'WEIGHT', value: weight, func: (text) => setWeight(text)},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.itemStyle}>
                            <Text style={styles.itemTitle}>{item.key}</Text>
                            <TextInput onChangeText={text => item.func(text)}> 
                                <Text style={{alignSelf:'center'}}>{item.value}</Text> 
                            </TextInput>
                        </View>
                    }
                    numColumns={numColumns}
                />
            </SafeAreaView>
            <View style={{width:"100%"}}>
                <Text h4 style={styles.bioTitle} > Biografia</Text>
                <TextInput style={styles.bio} 
                    multiline maxLength={1000} numberOfLines={7}
                    onChangeText={text => setBiography(text)}
                    value={ biography }
                > 
                </TextInput>
                
            </View>
            <ProfileDetailEdit 
                back_squat = {back_squat} setBackSquat = {(back_squat) => setBackSquat(back_squat)}
                clean = {clean} setClean = {(clean) => setClean(clean)}
                clean_jerk = {clean_jerk} setCleanJerk = {(clean_jerk) => setCleanJerk(clean_jerk)}
                snatch = {snatch} setSnatch = {(snatch) => setSnatch(snatch)}
                deadlift = {deadlift} setDeadlift = {(deadlift) => setDeadlift(deadlift)}
                pull_ups = {pull_ups} setPullUps = {(pull_ups) => setPullUps(pull_ups)}
                fran = {fran} setFran = {(fran) => setFran(fran)}
            />
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        // backgroundColor: 'transparent',
        backgroundColor: 'rgba(250, 250, 250, .9)',
        alignItems: 'center',
    },
    containerList: {
        flexDirection: "row",
        height: 70,
        width: '100%',
        // backgroundColor: 'rgba(87, 87, 87, 0.7)',
        alignItems: 'center',
        paddingVertical: 5,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 1,
    },
    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:25,        
    },
    itemTitle: {
        fontWeight: "bold",
        fontSize: 15
    },
    bioTitle: {
        marginTop:10,
    },
    bio:{
        marginTop:10,
        paddingHorizontal:20,
        textAlign: "justify",
        // alignSelf:'center'
    },
    button: {
        marginVertical: 30,
        marginHorizontal: 30,
        borderRadius: 10, 
        width:100, 
        backgroundColor:'#f2b90a'
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'90%',
        height:'40%'
    },
    buttonDate: {
        marginHorizontal: 30, 
        marginVertical: 5,
        backgroundColor:'#f2b90a'
    },
    selectHour: {
        marginHorizontal: 50,
        height: 50, 
        width: 150
    }
});