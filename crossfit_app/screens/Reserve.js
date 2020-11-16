import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { SearchBar, Header, ListItem, Avatar } from "react-native-elements";
import {Picker} from '@react-native-picker/picker';
import { DataTable } from 'react-native-paper';

import { getUserReserve } from "../service/LoginServices"

export default function Reserve() {

    const [selectedDay, setSelectedDay] = useState('none')
    const [selectedHour, setSelectedHour] = useState('none')
    const [user, setUser] = useState([])

    // useEffect(() => {
    //     getFireUsers(getUsers);
    //     console.log("LISTA")
    //     console.log(list)
    // },[]);
    //
    const getUsers = (day, hour) => {
        if(day != 'none' && hour != 'none'){
          getUserReserve(day, hour, setUser)
        }
    }

    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.jpg')} style={styles.backgroundImage}/>
        <View style={styles.contatinBackground}>
          <Header
              placement="left"
              backgroundColor="#fff"
              centerComponent={{ text: 'Reservas', style: { color: '#000', fontSize:20, } }}
          />
          <Text>DÍA</Text>
          <Picker
              selectedValue={selectedDay}
              style={styles.selectHour}
              onValueChange={(data) => {setSelectedDay(data), getUsers(data, selectedHour)}}
          >
              <Picker.Item label="none" value="none" />
              <Picker.Item label="Lunes" value="Monday" />
              <Picker.Item label="Martes" value="Tuesday" />
              <Picker.Item label="Miércoles" value="Wednesday" />
              <Picker.Item label="Jueves" value="Thursday" />
              <Picker.Item label="Viernes" value="Friday" />
              <Picker.Item label="Sábado" value="Saturday" />
              <Picker.Item label="Domingo" value="Sunday" />
          </Picker>
          <Text>HORA</Text>
          {
            selectedDay != 'none'? (
              selectedDay == 'Saturday' || selectedDay == 'Sunday' ? (
                  <Picker
                      selectedValue={selectedHour}
                      style={styles.selectHour}
                      onValueChange={(data) => {setSelectedHour(data), getUsers(selectedDay, data)}}
                  >
                      <Picker.Item label="none" value="none" />
                      <Picker.Item label="8:00" value="8:00" />
                      <Picker.Item label="9:00" value="9:00" />
                  </Picker>
              ) : (
                  <Picker
                      selectedValue={selectedHour}
                      style={styles.selectHour}
                      onValueChange={(data) => {setSelectedHour(data), getUsers(selectedDay, data)}}
                  >
                      <Picker.Item label="none" value="none" />
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
            ) : (
                <Picker
                    selectedValue={selectedHour}
                    style={styles.selectHour}
                    onValueChange={(data) => setSelectedHour(data)}
                >
                    <Picker.Item label="none" value="none" />
                </Picker>
            )
          }
          {
            selectedDay != 'none'? (
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title style={styles.center}>
                    {
                      selectedDay == 'Monday'? (
                        <Text> Lunes - {selectedHour} </Text>
                      ): selectedDay == 'Tuesday'? (
                        <Text> Martes - {selectedHour}</Text>
                      ):selectedDay == 'Wednesday'? (
                        <Text> Miércoles - {selectedHour}</Text>
                      ):selectedDay == 'Thursday'? (
                        <Text> Jueves - {selectedHour}</Text>
                      ):selectedDay == 'Friday'? (
                        <Text> Viernes - {selectedHour}</Text>
                      ):selectedDay == 'Saturday'? (
                        <Text> Sábado - {selectedHour}</Text>
                      ):selectedDay == 'Sunday'? (
                        <Text> Domingo - {selectedHour}</Text>
                      ):undefined
                    }

                    </DataTable.Title>
                </DataTable.Header>
                {
                  user ? (
                    user.map((l, i) => (
                      <DataTable.Row key={i}>
                          <DataTable.Cell style={styles.center}> {l}    </DataTable.Cell>
                      </DataTable.Row>
                    ))
                  ):(
                    <DataTable.Row>
                        <DataTable.Cell style={styles.center}> No hay registros    </DataTable.Cell>
                    </DataTable.Row>
                  )
                }

            </DataTable>
          ) : undefined
          }
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "",
  },
  selectHour:{
      width: 150
  },
  dataTable: {
      width: '75%',
  },
  center:{
    justifyContent: "center"
  },
  contatinBackground:{
    alignItems: "center",
    backgroundColor: 'rgba(250, 250, 250, .9)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode:'stretch',
    position: 'absolute',
    justifyContent: 'center',
  },
});
