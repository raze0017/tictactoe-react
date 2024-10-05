import { useState } from "react";
import Board from "./components/board";
import "./App.css";

function App() {
  const [arrayscurrent, setArrays] = useState([
    [["."], ["."], ["."]],
    [["."], ["."], ["."]],
    [["."], ["."], ["."]],
  ]);
  const [play, setPlay] = useState(0);
  const [winner, setWinner] = useState(null);

  let current;
  if (play === 0) {
    current = "X";
  } else {
    current = "O";
  }

  const checkWinner = (newArray) => {
    // Check rows, columns, and diagonals for a win
    const lines = [
      // Horizontal
      ...newArray,
      // Vertical
      [newArray[0][0], newArray[1][0], newArray[2][0]],
      [newArray[0][1], newArray[1][1], newArray[2][1]],
      [newArray[0][2], newArray[1][2], newArray[2][2]],
      // Diagonal
      [newArray[0][0], newArray[1][1], newArray[2][2]],
      [newArray[0][2], newArray[1][1], newArray[2][0]],
    ];

    for (const line of lines) {
      if (line.every((cell) => cell[0] === "X")) {
        return "X";
      } else if (line.every((cell) => cell[0] === "O")) {
        return "O";
      }
    }
    return null;
  };

  const updateState = (array, value) => {
    const newArray = arrayscurrent.map((arr) => arr.map((item) => [...item]));

    if (play === 0) {
      newArray[array - 1][value] = ["X"];
      setPlay(1);
    } else {
      newArray[array - 1][value] = ["O"];
      setPlay(0);
    }

    const winner = checkWinner(newArray);
    setWinner(winner);
    setArrays(newArray);
  };

  return (
    <>
      <header className="flex font-bold">Tic-Tac-Toe: A React approach</header>
      <Board
        arrays1={arrayscurrent[0]}
        arrays2={arrayscurrent[1]}
        arrays3={arrayscurrent[2]}
        updateState={updateState}
      ></Board>
      <footer className="pt-20 pr-10 font-semibold">
        {winner ? (
          <h1>Winner: Player {winner}</h1>
        ) : (
          <h1>Chance of player {current}</h1>
        )}
      </footer>
    </>
  );
}

export default App;
