import React from "react";
import { Table } from "./Components/Table";

const baseLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateBase = (): number[][] => {
  const result: number[][] = [];
  for (let i = 0; i < 9; i++) {
    const newLine = [...baseLine];
    const regionOffset = Math.floor(i / 3);
    const lineOffset = i % 3;

    result.push(
      newLine.concat(newLine.splice(0, regionOffset + 3 * lineOffset))
    );
  }
  return result;
};

function App() {
  const mock = generateBase();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <a
        className="App-link"
        href="https://habr.com/ru/post/192102/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "5px" }}
      >
        Algorithm
      </a>
      <button style={{ margin: 5 }}>New game</button>
      <Table data={mock} />
    </div>
  );
}

export default App;
