import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet("https://jsonplaceholder.typicode.com/todos/").reply(
  200,

  [
    { id: 1, title: "To code" },
    { id: 2, title: "To sleep" },
    { id: 3, title: "To eat" }
  ]
);

export const getDummyData = async () => {
  let url = "https://jsonplaceholder.typicode.com/todos/";
  let data = await axios(url, {
    method: "GET"
  });
  return data;
};
