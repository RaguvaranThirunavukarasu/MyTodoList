import React, { useCallback, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [IsEmpty, setIsEmpty] = useState("");

  const handleByAdd = useCallback(() => {
    if (text) {
      setTodo([...todo, text]);
      setText("");
      setIsEmpty("");
    } else {
      setIsEmpty("Please enter task.");
    }
  }, [todo, text]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        id="txttodo"
        type="text"
        placeholder="Enter task"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
      <button onClick={handleByAdd}>Add</button>
      <span>{IsEmpty}</span>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
