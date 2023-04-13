import React from "react";
import "./App.js";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      {/* <h5>{todo.sno}</h5> */}
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
