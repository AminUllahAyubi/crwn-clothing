import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { Firestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDDwE2dVipUgT4kZWg4xbarAOfv5_iYvAA",
  authDomain: "crwn-db-4d1e5.firebaseapp.com",
  projectId: "crwn-db-4d1e5",
  storageBucket: "crwn-db-4d1e5.appspot.com",
  messagingSenderId: "880815789563",
  appId: "1:880815789563:web:8f2075cf7dbdaf9da9275e",
  measurementId: "G-8R3CS4STS5"
};

export const createUserProfileDocument =async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot= await userRef.get();
  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await userRef.set({
        displayName,email,createdAt,...additionalData
      })
    }catch(error){
      console.log('error creating user',error.message);
    }
  }
  return userRef;

}



firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;











