// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcDrd2V1qxlXdLZQV5KupSfpW4juFRsuY",
  authDomain: "full-portfolio.firebaseapp.com",
  projectId: "full-portfolio",
  storageBucket: "full-portfolio.appspot.com",
  messagingSenderId: "767997345460",
  appId: "1:767997345460:web:264b0427af6adcdf9f21e1",
  measurementId: "G-ENC6TM4YLM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
