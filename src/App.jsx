// import { useState, useEffect } from "react";
import "./App.css";

import { createContext, useState } from "react";
import WrapperA from "./WrapperA";
import ComponentB from "./ComponentB";

export const TextContext = createContext();

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <TextContext.Provider value={{ inputText, setInputText }}>
      <div className="app">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <WrapperA></WrapperA>
        <ComponentB></ComponentB>
      </div>
    </TextContext.Provider>
  );
}

export default App;
