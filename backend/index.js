import express from "express";

import {db} from './firebase.js'

import { collection, getDocs, setDoc, addDoc } from "firebase/firestore";



// Add a new document with a generated id.


const app = express()

app.listen(3000)

app.get('/',async (req,res)=>{
  const querySnapshot = await getDocs(collection(db, "clientes"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  
  res.status(200)
})

app.post('add',async (req,res)=>{
  const conteudo=req.body.data
  const docRef = await addDoc(collection(db, "clientes"), {
    conteudo
  });
  console.log("Document written with ID: ", docRef.id);
})