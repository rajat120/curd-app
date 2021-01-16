import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC7xJF3VVQfx1JdAkG1Kt1v0PW0sER4O6o",
    authDomain: "curdapp-f6dcd.firebaseapp.com",
    projectId: "curdapp-f6dcd",
    storageBucket: "curdapp-f6dcd.appspot.com",
    messagingSenderId: "849561005948",
    appId: "1:849561005948:web:ff555c0cface5160ca3ef9"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db ;
