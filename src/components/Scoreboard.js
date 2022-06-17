import React from "react";
import "../styles/Scoreboard.css";

export default function Scoreboard(props) {
  return (
    <section className="scoreboard-container">
      <article className="scoreboard-item">
        Score: {props.scores.current}
      </article>
      <article className="scoreboard-item">
        Best score: {props.scores.best}
      </article>
    </section>
  );
}
