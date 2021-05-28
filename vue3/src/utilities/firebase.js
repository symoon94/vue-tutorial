import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ahtwErCTgk4LHDTBpPpsIZsuZs_tMII",
  authDomain: "symoon94-vue3-tutorial.firebaseapp.com",
  projectId: "symoon94-vue3-tutorial",
  storageBucket: "symoon94-vue3-tutorial.appspot.com",
  messagingSenderId: "785230555009",
  appId: "1:785230555009:web:f27bca52fd94b4c9006a80",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
