
import { makeStyles, Modal } from '@material-ui/core';
import { Button } from '@material-ui/core'
import "./Todolist.css";


import React, { useState } from 'react'
import db from './firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
function Todolist({list}) {
    const classes = useStyles();
    const [open, setopen] = useState(false);
    const [input, setinput] = useState("");
   
    const [done, setdone] = useState(false);

    const deleteatodo=()=>{
db.collection('lists').doc(list.id).delete();
    }

    const  edittodo=()=>{
        
      setopen(true);
     
}

const updatetodo=()=>{
    
    db.collection('lists').doc(list.id).set({
        list:input,
    }, {merge:true})
    setopen(false);
}

  return (
      <ul>
    <div>
        <input type="checkbox"  checked={done} onChange={()=>setdone(!done)}  />
        <li style={{textDecoration: done ? "line-through" : null}} > {list.list}</li>
        <Modal open={open} 
        onClose={e=>setopen(false)}
        
        >
           
<div  className={classes.paper}>
    <h3> Edit a todo </h3>
    <input value={input} type="text" onChange={e=> setinput(e.target.value)}/>
    <Button variant="contained" color="primary" onClick={updatetodo}> Update todo</Button>
</div>

        </Modal>
      <Button  variant="contained" color="primary" onClick={deleteatodo}>delete</Button>
      <Button className="todolist__button"  variant="contained" color="primary" onClick={edittodo}>Edit</Button>


     
     
      
    </div>
    </ul>
  )
}

export default Todolist
