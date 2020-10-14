import { Alert } from "react-native"
import firebase from 'firebase'


export const ingresar = (email, password) => {
	if(email === '' && password === '') {
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