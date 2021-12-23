
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByb68cEu9QvGwQUtCB3AhKGsMCiE21q6A",
    authDomain: "clone-7cd62.firebaseapp.com",
    projectId: "clone-7cd62",
    storageBucket: "clone-7cd62.appspot.com",
    messagingSenderId: "708021800306",
    appId: "1:708021800306:web:b33d2179dcb8fe8699e1eb",
    measurementId: "G-2W95MMDZB0"
  };

  const firebaseApp=firebase.intializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider}