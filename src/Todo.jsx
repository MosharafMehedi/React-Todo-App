import React from "react";
import "./App.css";

const Todo = (props) => {
  const { titel, disc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <article className="todo">
      <div>
        <h3>{titel}</h3>
        <p>{disc}</p>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
