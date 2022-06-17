import React, { useEffect, useState, useRef } from "react";
import "../styles/CardsDisplay.css";
import uniqid from "uniqid";
import Card from "./Card";

export default function CardsDisplay(props) {
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const hasFetchedData = useRef(false);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function arrayShuffle() {
    setMoves(moves + 1);
  }

  useEffect(() => {
    function filterData(data) {
      setCards(
        data.map((card) => {
          return { img: card.image, value: card.value, key: uniqid() };
        })
      );
    }
    async function fetchData() {
      try {
        await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=10")
          .then((response) => response.json())
          .then((data) => filterData(data.cards));
      } catch (e) {
        console.error("Error fetching api data", e);
      }
    }

    if (hasFetchedData.current === false) {
      fetchData();
      hasFetchedData.current = true;
    }
  }, [moves]);

  const shuffledCards = shuffle(cards).map((card) => {
    return (
      <Card
        hasFetchedData={hasFetchedData}
        setScores={props.setScores}
        img={card.img}
        shuffleCards={arrayShuffle}
        key={card.key}
      />
    );
  });

  return <section className="cards-container">{shuffledCards}</section>;
}
