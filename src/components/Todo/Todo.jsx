import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthActionCreators } from "../../redux/authReducer";
import "./Todo.css";

export const Todo = () => {
  const todos = useSelector((state) => state.auth.todos);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    console.log(newTodo);
    let currentId = todos.length + 1;
    dispatch(
      AuthActionCreators.addTodo({
        id: currentId,
        description: newTodo,
        completed: false,
      })
    );
    setNewTodo("");
  };

  const removeTodo = (index) => {
    dispatch(AuthActionCreators.removeTodo(index));
  };

  const toggleCompleted = (index) => {
    dispatch(AuthActionCreators.toggleCompleted(index));
  };

  return (
    <div className="todo">
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index} className="todosItem">
              <p
                style={{ textDecoration: item.completed ? "line-through" : "" }}
              >
                {item.description}
              </p>
              <button
                className="todoBtn"
                onClick={() => toggleCompleted(index)}
              >
                &#10003;
              </button>
              <button className="todoBtn" onClick={() => removeTodo(index)}>
                &#10006;
              </button>
            </li>
          );
        })}
      </ul>
      <div className="todo-adder">
        <input
          type="text"
          className="todo-input"
          placeholder="Текст задания"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="todoBtn" onClick={addTodoHandler}>
          Добавить
        </button>
      </div>
    </div>
  );
};
