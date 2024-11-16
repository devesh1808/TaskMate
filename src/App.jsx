import { useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";

function App() {
  const [tasklist, setTasklist] = useState([]);

  return (
    <>
      <Header />
      <AddTask />
      <ShowTask />
    </>
  );
}

export default App;
