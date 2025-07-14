import React from 'react'
import { ToDoItem } from "./ToDoItem";

export const ToDos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className="my-3">ToDos List</h3>
      {props.todos.length === 0 ? "No Todos to Display" :
        props.todos.map((todo) => {
          return(
            <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        )})
      }
    </div>
  )
}
