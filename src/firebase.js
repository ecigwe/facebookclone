import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoRB5UhFQ8xCxUPOFIMxr-7IB656zP4j4",
  authDomain: "facebookclone-9b865.firebaseapp.com",
  databaseURL: "https://facebookclone-9b865.firebaseio.com",
  projectId: "facebookclone-9b865",
  storageBucket: "facebookclone-9b865.appspot.com",
  messagingSenderId: "902751794977",
  appId: "1:902751794977:web:58307edbe821a94ddcb060",
  measurementId: "G-B1LBXJ75JH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
