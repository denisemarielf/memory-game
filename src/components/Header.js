import React from "react";
import Scoreboard from "./Scoreboard";
import "../styles/Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <div>
        <h1>Memory Game</h1>
        <p>Don't click on the same card more than once!</p>
      </div>
      <Scoreboard scores={props.scores} />
    </header>
  );
}
