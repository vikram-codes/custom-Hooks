import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Currency Convertor</h1>
      <InputBox />
      <InputBox />
    </>
  );
}

export default App;
