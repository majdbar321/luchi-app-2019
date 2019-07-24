import * as firebase from "firebase" ;
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtqOFBKzKmUVXXfR49f_PGpwF3uujEmVs",
    authDomain: "luchi-43a2e.firebaseapp.com",
    databaseURL: "https://luchi-43a2e.firebaseio.com",
    projectId: "luchi-43a2e",
    storageBucket: "luchi-43a2e.appspot.com",
    messagingSenderId: "552524207474",
    appId: "1:552524207474:web:9d3834d92e77303a"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;