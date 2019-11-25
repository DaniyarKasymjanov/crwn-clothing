import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDsNJeyWADq8VFKYCQjx7Z-sS_Blt8kSyg',
	authDomain: 'crwn-db-2f0a6.firebaseapp.com',
	databaseURL: 'https://crwn-db-2f0a6.firebaseio.com',
	projectId: 'crwn-db-2f0a6',
	storageBucket: 'crwn-db-2f0a6.appspot.com',
	messagingSenderId: '533339594350',
	appId: '1:533339594350:web:7f5726da232ab03f3b107f',
	measurementId: 'G-YNEGXY43CR'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
