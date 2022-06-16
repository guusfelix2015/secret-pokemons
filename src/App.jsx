import { useState } from "react";
import "./App.css";

import StartGame from "./components/StartGame";
import Game from "./components/Game";

import { pokemonsList } from "./data/pokemons";

const stages = [
  { id: 1, stage: "start" },
  { id: 2, stage: "game" },
  { id: 3, stage: "gameOver" },
];

const App = () => {
  const changeStageForGame = () => {
    setStage(stages[1].stage);
  };

  const pickedRandonCategoryAndWord = () => {
    const category = Object.keys(pokemonsList);
    const randomIndexCategory =
      category[Math.floor(Math.random() * category.length)];

    const randomIndexWordPokemon =
      pokemonsList[randomIndexCategory][
        Math.floor(Math.random() * [randomIndexCategory].length)
      ];
    console.log(randomIndexCategory);
    console.log(randomIndexWordPokemon);

    return { randomIndexCategory, randomIndexWordPokemon };
  };

  pickedRandonCategoryAndWord();

  const [gameStage, setStage] = useState(stages[0].stage);
  const [pokemonWords] = useState(pokemonsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letter, setLetter] = useState([]);

  return (
    <div className="App">
      {gameStage === "start" && (
        <StartGame changeStageForGame={changeStageForGame} />
      )}
      {gameStage === "game" && <Game />}
    </div>
  );
};

export default App;
