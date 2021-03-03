import React, { useEffect, useState } from "react";
import { addTodo, getDummyData, getDummyDataByID } from "./Service/Api";

const App = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchDummyData = async () => {
      try {
        let response = await getDummyData();
        console.log(response);
        let data = response.data.slice(0, 10);
        setTodo(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchDummyData();
  }, []);
  if (todo.length === 0) {
    return <div> No Todo Found.</div>;
  }

  const addTodoItem = async () => {
    let obj = {
      title: "foo",
      body: "bar",
      userId: 1
    };
    let data = await addTodo(obj);
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Axios Mock Demo</h1>
      {todo.map((item, index) => {
        return <div key={item.id}>{item.title}</div>;
      })}
      <button onClick={() => addTodoItem()}> Add todo </button>
    </div>
  );
};

export default App;
