import { Form } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  let [todolist,settodolist]=useState([])
  let addtodo=(todo)=>
  {
     settodolist([...todolist,todo.newtodo])
  }

  return (
    <div className="App">
      <input type='text'></input>
      <button type='submit' onClick={()=>addtodo(todo)}>ADD</button>
      <h1>list</h1>
    {
    todolist.map((todo, index)=><h2 key={index}>{todo}</h2>)
    }
    </div>
  );
}

export default App;
