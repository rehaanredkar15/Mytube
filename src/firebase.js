import  firebase from "firebase";
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBXN6Uf4dAkZCyImcGynVuqC4ZarpLqwCA",
  authDomain: "nottube-2.firebaseapp.com",
  projectId: "nottube-2",
  storageBucket: "nottube-2.appspot.com",
  messagingSenderId: "1037794664601",
  appId: "1:1037794664601:web:6d162439b004a2b675d808"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
