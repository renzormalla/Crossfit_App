import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function ProfileDetail({user,back_squat, clean, clean_jerk, snatch, deadlift, pull_ups, fran, setBackSquat, 
    setClean, setCleanJerk, setSnatch, setDeadlift, setPullUps, setFran}) 
    {
    return (
        <DataTable style={styles.dataTable}>
            <DataTable.Header>
                <DataTable.Title >Benchmark Stats </DataTable.Title>
                <DataTable.Title numeric>Value</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell >Back Squat</DataTable.Cell>
                <DataTable.Cell numeric>{back_squat}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Clean</DataTable.Cell>
                <DataTable.Cell numeric>{clean}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Clean and Jerk</DataTable.Cell>
                <DataTable.Cell numeric>{clean_jerk}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Snatch</DataTable.Cell>
                <DataTable.Cell numeric>{snatch}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Deadlift</DataTable.Cell>
                <DataTable.Cell numeric>{deadlift}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Max Pull-ups</DataTable.Cell>
                <DataTable.Cell numeric>{pull_ups}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Fran</DataTable.Cell>
                <DataTable.Cell numeric>{fran}</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
}
    
const styles = StyleSheet.create({
    dataTable: {
        width: '75%',
    }
});
