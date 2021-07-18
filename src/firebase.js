// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCF2_Kx5x71VaUEjFaxoKgA8KLJUq1ppOQ',
	authDomain: 'todo-app-b967f.firebaseapp.com',
	projectId: 'todo-app-b967f',
	storageBucket: 'todo-app-b967f.appspot.com',
	messagingSenderId: '509496164311',
	appId: '1:509496164311:web:25e62533b6ae404c6c1592',
	measurementId: 'G-RV7CG09604',
});

const db = firebaseApp.firestore();

export default db;
