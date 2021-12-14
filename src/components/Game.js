import Card from "./Card";
import { useState } from "react";
import Scoreboard from "./Scoreboard";

function Game() {
  const [cardArray, setCardArray] = useState([
    "Jerry",
    "Morty",
    "Rick",
    "Squanchy",
    "Birdperson",
    "Summer",
    "SleepyGary",
    "Beth",
  ]);
  const [clickedOnes, setClickedOnes] = useState([]);
  const [maxScore, setMaxScore] = useState(0);
  const [score, setScore] = useState(0);

  const renderCards = (arr) =>
    arr.map((item) => (
      <Card
        clickAction={cardOnClick}
        id={item}
        p={arr[arr.indexOf(item)]}
      ></Card>
    ));

  const shuffle = () => {
    let array = cardArray.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setCardArray(array);
  };

  const alreadyPicked = () => {
    if (score >= maxScore) {
      setMaxScore(score);
    }
    setClickedOnes([]);
    setScore(0);
  };

  const nonPicked = (arr) => {
    setClickedOnes(arr);
    setScore(score + 1);
    shuffle();
  };

  const cardOnClick = (e) => {
    let arr = clickedOnes.slice();
    if (clickedOnes.includes(e.currentTarget.id)) {
      alreadyPicked();
    } else {
      arr.push(e.currentTarget.id);
      nonPicked(arr);
    }
  };

  return (
    <div>
      <Scoreboard score={score} maxScore={maxScore}>
        {" "}
      </Scoreboard>
      <div className="game-holder">{renderCards(cardArray)}</div>
    </div>
  );
}

export default Game;
