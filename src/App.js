import React, { useEffect, useState } from "react";
import { getDummyData } from "./Service/Api";

const App = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchDummyData = async () => {
      let response = await getDummyData();
      console.log(response);
      let data = response.data.slice(0, 10);
      setTodo(data);
    };
    fetchDummyData();
  }, []);
  if (todo.length === 0) {
    return <div> No Todo Found.</div>;
  }
  return (
    <div className="App">
      <h1>Axios Mock Demo</h1>
      {todo.map((item, index) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default App;
