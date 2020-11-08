import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Text  } from 'react-native-elements'

import ProfileDetail from './ProfileDetail'



export default function Profile() {
    let numColumns = 6;
    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList 
                    data={[
                    {key: 'CITY', value: 'Quito'},
                    {key: 'DIVISION', value: 'Women'},
                    {key: 'AGE', value: '34'},
                    {key: 'HEIGHT', value: '162 cm'},
                    {key: 'WEIGHT', value: '59 kg'},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.itemStyle}>
                            <Text style={styles.itemTitle}>{item.key}</Text>
                            <Text style={{fontSize: 15}}>{item.value}</Text>
                        </View>
                    }
                    numColumns={numColumns}
                />
            </View>
            <View>
                <Text h4 style={styles.bioTitle} > Biografia</Text>
                <Text style={styles.bio} > A native of Oslo, Norway, Kristin Holte is a three-time CrossFit Games veteran. After starting CrossFit in 2012, she took seventh in her first regional appearance at the 2013 Europe Regional. She has qualified for the Games every year since, consistently finishing in the top 17 with a career-best finish of 2nd in 2019. A former gymnast and endurance athlete, Holte is a nutritionist by profession. </Text>
            </View>
            <ProfileDetail />            
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
        textAlign: "justify"
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