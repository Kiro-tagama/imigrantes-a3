
import {db} from './firebase.js'

import { collection, getDocs, setDoc, addDoc } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "clientes"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});


// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "clientes"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id);

