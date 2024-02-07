"use client";
import { useState } from "react";
// Comment
const Page = () => {
  const [todos, setTodos] = useState([{ name: "Gym", done: true, id: 1 }]);
  const [todo, setTodo] = useState("");
  console.log(todos);
  return (
    <div className="container p-10">
      <h1 className="text-4xl">Todo application</h1>
      <input
        className="border"
        placeholder="todo"
        onChange={(event) => {
          const text = event.target.value;
          setTodo({
            name: text,
            done: false,
          });
        }}
      />
      <button
        type="submit"
        className="bg-black text-white px-2 m-4"
        onClick={(event) => {
          event.preventDefault;
          setTodos([...todos, { ...todo, id: Math.random() }]);
        }}
      >
        submit
      </button>
      <ul>
        {todos.map((item, index) => {
          return (
            <li className="py-2" key={index}>
              {item.name}
              {item.done ? (
                <span className="ml-2 bg-green-500 px-2 rounded-xl text-white">
                  Done
                </span>
              ) : (
                <button
                  className="ml-2 px-2 text-white rounded-xl bg-red-400"
                  onClick={() => {
                    item.done = true;
                    const result = todos.filter((value) => {
                      return value.id !== item.id;
                    });

                    setTodos([item, ...result]);
                  }}
                >
                  marked as done
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
