import express from "express";
import cors from "cors"

import {db} from './firebase.js'

import { updateDoc, collection, getDocs, setDoc, addDoc, deleteDoc, doc } from "firebase/firestore";


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
  const id= req.body.id
  const update={
    nome: req.body.nome
    // fone: req.body. 
    // email: req.body. 
    // nacionalidade: req.body. 
    // dific: req.body. 
    // desc: req.body. 
  }

  const washingtonRef = doc(db, "clientes", id);

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, update);

  console.log('up');
})

app.delete('/',async (req,res)=>{
  const id='GHvI2FgjXgyo2MuCofxu'
  const remove = await deleteDoc(doc(db,'clientes',id))
  console.log('del', id );
})


// E0PErVC0y7ER1jwTkdcH
