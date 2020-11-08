import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Input } from 'react-native-elements'

export default function ProfileDetailEdit() {
    const [backSquat, setBackSquat] = useState('159')
    const [clean, setClean] = useState('160')
    const [cleanJerk, setCleanJerk] = useState('165')
    const [snatch, setSnatch] = useState('70')
    const [deadlitf, setDeadlitf] = useState('95')
    const [maxPull, setMaxPull] = useState('180')
    const [fran, setFran] = useState('100')

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
                        value={backSquat}
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
                        value={cleanJerk}
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
                        onChangeText={(text) => setDeadlitf(text)}
                        value={deadlitf}
                    />
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell >Max Pull-ups</DataTable.Cell>
                <DataTable.Cell numeric>
                    <Input style={styles.inputTable}
                        onChangeText={(text) => setMaxPull(text)}
                        value={maxPull}
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
