
import {db} from './firebase.js'

import { collection, getDocs, setDoc } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "clientes"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

const enviar = await setDoc(doc(db, "clientes", "novo"), {
  desc:"chocolate",
  email:"chocolate",
  nacionalidade:"chocolate",
  nome:"chocolate",
  tel:"123456789"
});
enviar.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
