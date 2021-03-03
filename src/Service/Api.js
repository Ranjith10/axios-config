import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

// Mock GET api
mock.onGet("https://jsonplaceholder.typicode.com/todos/").reply(200, [
  { id: 1, title: "To code" },
  { id: 2, title: "To sleep" },
  { id: 3, title: "To eat" }
]);

// Mock GET api - error
// mock.onGet("https://jsonplaceholder.typicode.com/todos/").networkError();

//Mock GET api with params
// mock
//   .onGet("https://jsonplaceholder.typicode.com/todos/1")
//   .reply(200, [{ id: 1, title: "To code" }]);

//Mock POST api
mock
  .onPost("https://jsonplaceholder.typicode.com/posts")
  .reply(201, { message: "success" });

export const getDummyData = async () => {
  let url = "https://jsonplaceholder.typicode.com/todos/";
  let data = await axios(url, {
    method: "GET"
  });
  return data;
};

export const getDummyDataByID = async () => {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  let data = await axios(url, {
    method: "GET"
  });
  return data;
};

export const addTodo = async (obj) => {
  let data = await axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: obj,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  return data;
};
