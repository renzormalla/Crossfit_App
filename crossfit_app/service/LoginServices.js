import { Alert } from "react-native"
import React, { useState} from 'react';
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
                    email: email,
                    city: 'Quito',
                    division: 'none',
                    age: 0,
                    height: '0 cm',
                    weight: '0 kg',
                    biography: 'Inserte su biografía aquí',
                    back_squat: 0,
                    clean: 0,
                    clean_jerk: 0,
                    snatch: 0,
                    deadlift: 0,
                    pull_ups: 0,
                    fran: '00:00'
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

export const signOut = () => {
    firebase
    .auth()
    .signOut()
    .then((obj) => {
        Alert.alert("Info","Sesion Finalizada")
    })
    .catch((error) => {
        Alert.alert("Error", error.message+" - "+error.code)
    })
}

export const recuperarClave = (email, fnIrLogin) => {
    firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then((obj) => {
        Alert.alert("Info","Ingrese a su correo para restaurar la clave")
        fnIrLogin()
    })
    .catch((error) => {
        Alert.alert("Error", error.message+" - "+error.code)
    })
}

export const uploadData = (upload, user) => {

    firebase.firestore().collection('User').doc(user)
    .get().then(function(doc) {
    if (doc.exists) {
        upload(doc.data())
    } else {
        Alert.alert("Informacion no encontrada");
    }
    }).catch(function(error) {
        Alert.alert("Error getting document:", error);
    });
}

export const uploadProfile = (upload, user) => {

    firebase.firestore().collection('User').doc(user)
    .get().then(function(doc) {
    if (doc.exists) {
        upload(doc.data())
    } else {
        Alert.alert("Informacion no encontrada");
    }
    }).catch(function(error) {
        Alert.alert("Error getting document:", error);
    });
}

export const uploadDetail = (upload, user) => {

    firebase.firestore().collection('User').doc(user)
    .get().then(function(doc) {
    if (doc.exists) {
        upload(doc.data())
    } else {
        Alert.alert("Informacion no encontrada");
    }
    }).catch(function(error) {
        Alert.alert("Error getting document:", error);
    });
}