import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { signOut } from "../service/LoginServices";

export default function CerrarSesion() {
    return (
      <View style={styles.container}>
        <Text>Seguro que desea cerrar sesion?</Text>
        <Button 
          title="Aceptar"
          onPress={() => {
            signOut()
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
