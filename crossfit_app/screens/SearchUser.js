import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { SearchBar, ListItem, Avatar } from "react-native-elements";

import { getFireUsers } from "../service/LoginServices"

export default function SearchUser({navigation}) {

    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    const [searchlist, setSearchlist] = useState([])

    useEffect(() => {
        getFireUsers(getUsers);
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
            <Image source={require('../assets/logo.jpg')} style={styles.backgroundImage}/>
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
                        <ListItem key={i} bottomDivider 
                        onPress={() => { navigation.navigate("User",{userEmail:l.email}) }}
                         >
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
    alignItems: "center",
    // justifyContent: "center",
  },
  search: {
      width: '100%',
  },
  containerList:{
    backgroundColor: 'rgba(250, 250, 250, .9)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    width:'100%'
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
