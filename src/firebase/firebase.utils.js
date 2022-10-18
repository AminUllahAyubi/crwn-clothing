import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBeazVJqlBnMvxnmWOiiyCOflDTA0aXMC8",
    authDomain: "crwn-db-f3d74.firebaseapp.com",
    projectId: "crwn-db-f3d74",
    storageBucket: "crwn-db-f3d74.appspot.com",
    messagingSenderId: "262822536085",
    appId: "1:262822536085:web:2b57c65e42134687e1cc9c",
    measurementId: "G-SEJYC92E42"
};
firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;