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
  const [gameStage, setStage] = useState(stages[0].stage);
  const [pokemonWords] = useState(pokemonsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);

  const [score, setScore] = useState(0);

  const pickedRandomCategoryAndWord = () => {
    const categories = Object.keys(pokemonWords);

    const randomIndexCategory =
      categories[Math.floor(Math.random() * categories.length)];

    const randomIndexWordPokemon =
      pokemonWords[randomIndexCategory][
        Math.floor(Math.random() * [randomIndexCategory].length)
      ];
    return { randomIndexCategory, randomIndexWordPokemon };
  };

  const startGame = () => {
    const { randomIndexCategory, randomIndexWordPokemon } =
      pickedRandomCategoryAndWord();

    let letters = randomIndexWordPokemon.split("");
    letters = letters.map((letter) => letter.toLowerCase());

    console.log(letters, randomIndexCategory, randomIndexWordPokemon);

    setPickedCategory(randomIndexCategory);
    setPickedWord(randomIndexWordPokemon);
    setLetters(letters);
    setStage(stages[1].stage);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartGame startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          score={score}
          guesses={guesses}
        />
      )}
    </div>
  );
};

export default App;
