import { useState } from "react";
import axios from "../node_modules/axios/index";
import "./App.css";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";
import { Practice3 } from "./practices/Practice3";
import { Practice4 } from "./practices/Practice4";
import { Text } from "./Text";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { User } from "./types/user";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "namae",
  hobbies: ["映画", "散歩"],
};
function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <>
      <Text color="red" fontSize="18px" />
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <hr />
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
    </>
  );
}

export default App;
