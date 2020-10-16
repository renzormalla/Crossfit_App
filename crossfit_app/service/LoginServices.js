import { Alert } from "react-native"
import firebase from 'firebase'


export const ingresar = (email, password) => {
	if(email === '' || password === '') {
		alert('Enter details to signin!')
	} else {
		firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => {
			Alert.alert("Info","Acceso Exitoso")
		})
		.catch(error => {
			Alert.alert("Error", error.message+" - "+error.code)
		});
	}
}

export const create_user = (email, password, name, last, rol, date) => {
    if(email === '' || password === '' || last === '' || name === '') {
        alert('Enter details to signin!')
    } else {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
                firebase
                .firestore()
                .collection('User')
                .doc(email).set({
                    name: name,
                    last: last,
                    rol: rol,
                    date: date,
                    email: email
                })
                .catch(function() {
                    Alert.alert(
                        "Error",
                        "Porfavor llene todos los datos", [],
                        { cancelable: true }
                    );
                });


            Alert.alert(
                "Correcto",
                "Usuario registrado exitosamente", [],
                { cancelable: true }
            );
        })
        .catch(function() {
            Alert.alert(
                "Error",
                "Usuario ya se encuentra registrado", [],
                { cancelable: true }
            );
        });
    }
}