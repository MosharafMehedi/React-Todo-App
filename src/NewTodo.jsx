import React, { useState } from "react";
import "./index.css";
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ titel: "", disc: "" });
  const { titel, disc } = todo;
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({ titel: "", disc: "" });
    props.onAddTodo(todo);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="">Titel</label>
        <input
          type="text"
          id="titel"
          name="titel"
          value={titel}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Discription</label>
        <textarea
          type="text"
          id="disc"
          name="disc"
          value={disc}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
