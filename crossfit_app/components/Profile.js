import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from 'react-native-elements'

export default function Profile() {
    let numColumns = 6;
    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList 
                    data={[
                    {key: 'Contry', value: 'Norway'},
                    {key: 'CFID', value: '120480'},
                    {key: 'DIVISION', value: 'Women'},
                    {key: 'AGE', value: '34'},
                    {key: 'HEIGHT', value: '162 cm'},
                    {key: 'WEIGHT', value: '59 kg'},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.itemStyle}>
                            <Text style={styles.itemTitle}>{item.key}</Text>
                            <Text >{item.value}</Text>
                        </View>
                    }
                    numColumns={numColumns}
                />
            </View>
            <View>
                <Text h4> Biografia</Text>
                <Text style={styles.bio} > A native of Oslo, Norway, Kristin Holte is a three-time CrossFit Games veteran. After starting CrossFit in 2012, she took seventh in her first regional appearance at the 2013 Europe Regional. She has qualified for the Games every year since, consistently finishing in the top 17 with a career-best finish of 2nd in 2019. A former gymnast and endurance athlete, Holte is a nutritionist by profession. </Text>
            </View>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eeeeee',
        // alignItems: 'center',
    },
    containerList: {
        flexDirection: "row",
        height: 70,
        width: '100%',
        backgroundColor: 'rgba(87, 87, 87, 0.7)',
        alignItems: 'center',
        paddingVertical: 5,
        borderWidth: 1,
    },
    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:15,
    },
    itemTitle: {
        fontWeight: "bold",
    },
    bio:{
        paddingHorizontal:20,
        textAlign: "justify"
    }
});