import React from 'react'
import './App.css';
import {Todos} from "./Todos";
import {Footer} from "./Footer";
import {useState} from 'react';
import {AddTodo} from "./AddTodo";


function App() {
const onDelete = (todo) =>{
  console.log("I am Deleting this todo", todo)
  // let index= todos.indexOf(todo);
  // todos.splice(index, 1);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));

}

const addTodo = (title, desc)=>{
  console.log("I am adding this Todo", title, desc)
let sno = todos[todos.length-1].sno + 1;
  const myTodo = {
    sno : sno,
    title : title,
    desc: desc
}
console.log(myTodo);
}

  const [todos, setTodos]= useState([
    {
      sno: 1,
      title: "Go to School-1",
      desc: "You need to go to School-1"
    },
    {
      sno: 2,
      title: "Go to School-2",
      desc: "You need to go to School-2"
    },
    {
      sno: 3,
      title: "Go to School-3",
      desc: "You need to go to School-3"
    }
  ]);
  return (
    <>
<Todos todos = {todos} onDelete={onDelete}/>
<Footer />
<AddTodo addTodo={addTodo}/>
    </>
  );
}

export default App;
