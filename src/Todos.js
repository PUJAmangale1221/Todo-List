import React from "react";
import { TodoItem } from "./TodoItem";
import "./App.js";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "60vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-5">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />{" "}
                <hr />
              </>
            );
          })}
    </div>
  );
};
