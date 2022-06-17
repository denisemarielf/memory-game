import React, { useState } from "react";
import "../styles/Card.css";

export default function Card(props) {
  const [IsClicked, setIsClicked] = useState(false);

  function handleClick() {
    IsClicked ? clickedCard() : notClickedCard();
    props.shuffleCards();
  }

  function clickedCard() {
    props.setScores((prevState) => {
      return { ...prevState, current: 0 };
    });
    props.hasFetchedData.current = false;
  }

  function notClickedCard() {
    setIsClicked(true);
    props.setScores((prevState) => {
      if (prevState.current >= prevState.best) {
        return {
          ...prevState,
          current: prevState.current + 1,
          best: prevState.best + 1,
        };
      } else {
        return { ...prevState, current: prevState.current + 1 };
      }
    });
  }

  return (
    <article className="card" onClick={handleClick}>
      <img className="card-img" src={props.img} alt="img"></img>
    </article>
  );
}
