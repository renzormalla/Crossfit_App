import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SearchBar, Header, ListItem, Avatar } from "react-native-elements";

import { getFireUsers } from "../service/LoginServices"

export default function Search() {

    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    const [searchlist, setSearchlist] = useState([])

    useEffect(() => {
        getFireUsers(getUsers);
        console.log("LISTA")
        console.log(list)
    },[]);

    const getUsers = (data) => {
        setList(data)
        setSearchlist(data)
    }
    
    updateSearch = (text) => {
        if (text) {
            const newData = searchlist.filter(function (item) {
              const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            });
            setList(newData);
            setSearch(text);
          } else {
            setList(searchlist);
            setSearch(text);
          }
    };

    return (
        <View style={styles.container}>
            <Header
                placement="left"
                backgroundColor="#fff"
                centerComponent={{ text: 'Buscar Usuarios', style: { color: '#000', fontSize:20, } }}
            />
            <SearchBar
                containerStyle={styles.search}
                placeholder="Escriba aqui..."
                onChangeText={(text) => updateSearch(text)}
                onClear={(text) => updateSearch('')}
                value={search}
            />
            <View style={styles.containerList}>
            {
                list ? (
                    list.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar rounded source={{uri: l.avatar_url}} />
                            <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                ):(
                    <ListItem bottomDivider>
                        <ListItem.Content>
                        <ListItem.Title>No hay usuarios</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                )
                
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
    // justifyContent: "center",
  },
  search: {
      width: '100%',
  },
  containerList:{
      width:'100%'
  }
});
