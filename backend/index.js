import express from "express";
import cors from "cors"

import {db} from './firebase.js'

import { collection, getDocs, setDoc, addDoc, deleteDoc, doc } from "firebase/firestore";


const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || 3000)

app.get('/',async (req,res)=>{
  const querySnapshot = await getDocs(collection(db, "clientes"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  res.status(200)
})

app.post('/add',async (req,res)=>{
  const conteudo=req.body

  console.log('conteudo',conteudo);
  const docRef = await addDoc(collection(db, "clientes"),
      conteudo
  )
  console.log("Document written with ID: ", docRef.id);
})

app.put('/',(req,res)=>{
  // id {
  //   nome: 'rodrigo',
  //   fone: '',
  //   email: 'teste',
  //   nacionalidade: '',
  //   dific: '',
  //   desc: ''
  // }
  console.log('up');
})

app.delete('/',async (req,res)=>{
  const id='GHvI2FgjXgyo2MuCofxu'
  const remove = await deleteDoc(doc(db,'clientes',id))
  console.log('del', id );
})


// E0PErVC0y7ER1jwTkdcH
