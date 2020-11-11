import React from 'react';
import { StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Reserve({selectedValue, setSelectedValue, day}) {
    console.log(day)
    return(
        day == 'Saturday' || day == 'Sunday' ? (
            <Picker
                selectedValue={selectedValue}
                style={styles.selectHour}
                onValueChange={(data) => setSelectedValue(data)}
            >
                <Picker.Item label="8:00" value="8:00" />
                <Picker.Item label="9:00" value="9:00" />
            </Picker>
        ) : (
            <Picker
                selectedValue={selectedValue}
                style={styles.selectHour}
                onValueChange={(data) => setSelectedValue(data)}
            >
                <Picker.Item label="6:00" value="6:00" />
                <Picker.Item label="7:00" value="7:00" />
                <Picker.Item label="8:00" value="8:00" />
                <Picker.Item label="9:00" value="9:00" />
                <Picker.Item label="16:00" value="16:00" />
                <Picker.Item label="17:00" value="17:00" />
                <Picker.Item label="18:00" value="18:00" />
                <Picker.Item label="19:00" value="19:00" />
                <Picker.Item label="20:00" value="20:00" />
            </Picker>
        )
    )
}

const styles = StyleSheet.create({
    selectHour:{
        width: 100
    }
});