import axios from "../node_modules/axios/index";
import "./App.css";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";
import { Practice3 } from "./practices/Practice3";
import { Practice4 } from "./practices/Practice4";

function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <button onClick={onClickFetchData}>データ取得</button>
      <hr />
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
    </>
  );
}

export default App;
