import React from "react";

export default function List({
  todoItems,
  setInputValue,
  deleteHandler,
  setTodoList
}) {
  const clickHandler = (id) => {
    const updatedList = todoItems.map((item) => {
      if (item.id === id) return { ...item, isDone: !item.isDone };
      else return item;
    });
    setTodoList(() => updatedList);
  };

  const editHandler = (item) => {
    setInputValue(item.listItem);
    deleteHandler(item.id);
  };
  return (
    <ul className="todo-list text-3 bold-lg text-start m-l-md">
      {todoItems.map((item, index) => {
        return (
          <li key={index + 1} className="flex-spaced-between">
            <div
              className={`list__items item ${item.isDone && "strike"}`}
              onClick={() => clickHandler(item.id)}
            >
              {index + 1}. {item.listItem}
            </div>
            <div>
              <button
                className="btn text-primary m-l-xl"
                onClick={() => editHandler(item)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
              <button
                className="btn text-danger m-r-xl"
                onClick={() => deleteHandler(item.id)}
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
