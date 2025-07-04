import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import "./App.css";
import NewTodo from "./NewTodo";

const Home = (todo) => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };
  return (
    <div className="contain">
      <h1>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
