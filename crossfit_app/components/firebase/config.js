import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCc-kSCryrYjyQSUxcxHFdTMYuRoC2yoMA',
  authDomain: 'crossfitapp-4d48e.firebaseapp.com',
  databaseURL: 'https://crossfitapp-4d48e.firebaseio.com',
  projectId: 'crossfitapp-4d48e',
  storageBucket: 'crossfitapp-4d48e.appspot.com',
  messagingSenderId: '910876229757',
  appId: '1:910876229757:android:9841cfe257916d2ee3b114',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };