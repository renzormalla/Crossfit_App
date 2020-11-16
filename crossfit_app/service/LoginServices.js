import { Alert } from "react-native"
import React, { useState} from 'react';
import firebase from 'firebase'
import { exp } from "react-native-reanimated";
//////////////////
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);
//////////////////


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

export const getUserReserve = (day, hour, setUser) => {

		let reserve = firebase
			.firestore()
			.collection('Reserve')
			.doc(day)
			.collection('Hour')
			.doc(hour)

		reserve.get().then(function(data){
				setUser(data.data().student)
		});
}

export const update_user = (name, last, email, city, division, age, height, weight, biography, back_squat, clean, clean_jerk, snatch, deadlift, pull_ups, fran) => {
    firebase
        .firestore()
        .collection('User')
        .doc(email).set({
            name: name,
            last: last,
            city: city,
            division: division,
            age: age,
            height: height,
            weight: weight,
            biography: biography,
            back_squat: back_squat,
            clean: clean,
            clean_jerk: clean_jerk,
            snatch: snatch,
            deadlift: deadlift,
            pull_ups: pull_ups,
            fran: fran
        })
        .catch(function() {
            Alert.alert(
                "Error",
                "Porfavor llene todos los datos", [],
                { cancelable: true }
            );
        });
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

export const create_reserve = (user, monday, tuesday, wednesday, thursday, friday, saturday, sunday) => {

    if(monday != 'none'){
        validate_reserve(user, 'Monday', monday)
    }
    if(tuesday != 'none'){
        validate_reserve(user, 'Tuesday', tuesday)
    }
    if(wednesday != 'none'){
        validate_reserve(user, 'Wednesday', wednesday)
    }
    if(thursday != 'none'){
        validate_reserve(user, 'Thursday', thursday)
    }
    if(friday != 'none'){
        validate_reserve(user, 'Friday', friday)
    }
    if(saturday != 'none'){
        validate_reserve(user, 'Saturday', saturday)
    }
    if(sunday != 'none'){
        validate_reserve(user, 'Sunday', sunday)
    }
}

export const validate_reserve = (user, day, hour) => {
    var cont = 0;
    var flag = false
    var msg = ''
    let reserve = firebase.firestore().collection('Reserve').doc(day).collection('Hour').doc(hour)
        reserve.get().then(function(data){
            if(!data.data().student){
                reserve
                .set(
                    { student: [user] },
                    { merge: true }
                )
            }else{
                data.data().student.forEach(function(doc){

                    if(cont == 9){
                        Alert.alert(
                            "Error",
                            "Existen horarios llenos, verifique las reservas", [],
                            { cancelable: true }
                        );
                    }
                    else{
                        if(doc == user){
                            Alert.alert(
                                "Error",
                                "Ya se encuentra resgistrado es ese horario", [],
                                { cancelable: true }
                            );
                        }
                        else{
                            flag = true
                        }
                    }
                    cont++;
                })
                if(flag == true){
                    firebase.firestore().runTransaction(transaction => {
                        return transaction.get(reserve).then(snapshot => {
                            const largerArray = snapshot.get('student');
                            largerArray.push(user);
                            transaction.update(reserve, 'student', largerArray);
                        });
                    });
                    flag = false
                }

            }
        })

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

export const getFireUsers = (getUsers) => {
    console.log("USUARIOS")
    let userList = []
    let image = ''
    firebase
        .firestore()
        .collection('User').get()
        .then(async function(users) {
            users.forEach(async function(doc) {
                console.log("IMAGEN")
                firebase.storage().ref().child(doc.id).getDownloadURL()
                .then(res => {
                    image = res
                    userList.push({
                        email:doc.id,
                        name: doc.data().name + " " + doc.data().last,
                        avatar_url: image,
                    })
                    console.log(doc.id," -- ", image)
                    // console.log("Lista")
                    // getUsers(userList)
                })
                .catch(error => {
                    image = 'empty'
                    userList.push({
                        email:doc.id,
                        name: doc.data().name + " " + doc.data().last,
                        avatar_url: image,
                    })
                    console.log(doc.id," -- ", image)
                    // console.log("Lista")
                    // getUsers(userList)
                });
                console.log("Lista")
                getUsers(userList)
            });
            // console.log("Lista")
            // getUsers(userList)
        })
}
