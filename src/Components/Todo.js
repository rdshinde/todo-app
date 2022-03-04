import React, { useEffect, useState } from "react";
import List from "./list";

export default function TodoList() {
  const [todoItems, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState();
  useEffect(() => {
    setTodoList(() => {
      return JSON.parse(localStorage.getItem("todoList"));
    });
  }, []);
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addToDoHandler = (e, value) => {
    if (e.key === "Enter") {
      setTodoList((prev) => [
        ...prev,
        { id: prev.length + 1, listItem: value, isDone: false }
      ]);
      setInputValue("");
    }
  };
  const deleteHandler = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className="m-md p-xl bg-dark">
      <h1>ToDo List</h1>
      <div className="m-y-lg">
        <div className="input-group todo-input text-3 bold-lg text-start">
          <label htmlFor="todo-item-input"> Add ToDo Item: </label>
          <input
            className="text-offwhite"
            id="todo-item-input"
            onChange={changeHandler}
            onKeyDown={(e) => addToDoHandler(e, e.target.value)}
            placeholder="Ex. Pickup sister at 6.00PM"
            type="text"
            value={inputValue}
            autoFocus
          />
        </div>
        <List
          todoItems={todoItems}
          setTodoList={setTodoList}
          setInputValue={setInputValue}
          deleteHandler={deleteHandler}
        />
      </div>
    </div>
  );
}
