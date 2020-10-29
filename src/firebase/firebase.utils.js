import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC95qx5UsYUp_zuBvgiullYMepGcslygDM",
  authDomain: "crown-db-813d6.firebaseapp.com",
  databaseURL: "https://crown-db-813d6.firebaseio.com",
  projectId: "crown-db-813d6",
  storageBucket: "crown-db-813d6.appspot.com",
  messagingSenderId: "1006366522657",
  appId: "1:1006366522657:web:d06613d54ea7e7b4571260",
  measurementId: "G-2BJ6G0L176"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      });
    } catch(err) {
      console.log('error creating users', err);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;