import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Input } from 'react-native-elements'
import { uploadDetail } from '../service/LoginServices';

export default function ProfileDetailEdit({
    back_squat, clean, clean_jerk, snatch, deadlift, pull_ups, fran, setBackSquat, setClean, setCleanJerk,
    setSnatch, setDeadlift, setPullUps, setFran}) {
    // const [back_squat, setBackSquat] = useState('');
    // const [clean, setClean] = useState('');
    // const [clean_jerk, setCleanJerk] = useState('');
    // const [snatch, setSnatch] = useState('');
    // const [deadlift, setDeadlift] = useState('');
    // const [pull_ups, setPullUps] = useState('');
    // const [fran, setFran] = useState('');
    const user = global.emailUsuario;

    useEffect(() => {
        uploadDetail(upload, user);
    }, []);

    const upload = (data) => {
        setBackSquat(data.back_squat.toString())
        setClean(data.clean.toString())
        setCleanJerk(data.clean_jerk.toString())
        setSnatch(data.snatch.toString())
        setDeadlift(data.deadlift.toString())
        setPullUps(data.pull_ups.toString())
        setFran(data.fran.toString())
    }

    return (
        <DataTable style={styles.dataTable}>
            <DataTable.Header>
                <DataTable.Title >Benchmark Stats </DataTable.Title>
                <DataTable.Title numeric>Value</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell >Back Squat</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setBackSquat(text)}
                        value={back_squat}
                    />
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Clean</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setClean(text)}
                        value={clean}
                    />
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Clean and Jerk</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setCleanJerk(text)}
                        value={clean_jerk}
                    />
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Snatch</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setSnatch(text)}
                        value={snatch}
                    />
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Deadlift</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setDeadlift(text)}
                        value={deadlift}
                    />
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Max Pull-ups</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setPullUps(text)}
                        value={pull_ups}
                    />
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Fran</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setFran(text)}
                        value={fran}
                    />
                </DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
}
    
const styles = StyleSheet.create({
    dataTable: {
        width: '75%',
    },
    inputTable: {
        fontSize: 13,
        padding: 0,
        margin: 0,
    }
});
