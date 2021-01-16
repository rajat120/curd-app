import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import firebase from "firebase";

import Todolist from './Todolist';


function App() {
  const [lists, setlists] = useState([]);
const [input, setinput] = useState("");

useEffect(() => {
  db.collection('lists').orderBy('timestamp','desc').onSnapshot(snapshot => {
   setlists(snapshot.docs.map(doc=>({id:doc.id, list:doc.data().list})))
  })
 }, [])

const addtolist =(e)=>{
  e.preventDefault();
  db.collection('lists').add({
    list: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
setinput("");
}


  return (
    <div className="app">
      <h1> To Do Lists</h1>
      <form>
      <input value={input} type="text" placeholder="Add a lists here" onChange={e=> setinput(e.target.value)} />
      <Button disabled={!input} type="submit" className="app_button" variant="contained" color="primary" onClick={addtolist}> Add todo list </Button>
 </form>
     {lists.map((list,id) =>(
     <Todolist key={id} list={list}/>
     ))}
     
    </div>
  );
  
}

export default App;
