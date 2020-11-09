import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import { uploadDetail } from '../service/LoginServices';

export default function ProfileDetail() 
    {
        const [back_squat, setBackSquat] = useState('');
        const [clean, setClean] = useState('');
        const [clean_jerk, setCleanJerk] = useState('');
        const [snatch, setSnatch] = useState('');
        const [deadlift, setDeadlift] = useState('');
        const [pull_ups, setPullUps] = useState('');
        const [fran, setFran] = useState('');
        const user = global.emailUsuario;

    useEffect(() => {
        uploadDetail(upload, user);
    });

    const upload = (data) => {
        setBackSquat(data.back_squat)
        setClean(data.clean)
        setCleanJerk(data.clean_jerk)
        setSnatch(data.snatch)
        setDeadlift(data.deadlift)
        setPullUps(data.pull_ups)
        setFran(data.fran)
    }
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
