import "./App.css";

import { useCallback, useEffect, useState } from "react";

import StartGame from "./components/StartGame";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

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

  const pickedRandomCategoryAndWord = useCallback(() => {
    const categories = Object.keys(pokemonWords);

    const randomIndexCategory =
      categories[Math.floor(Math.random() * categories.length)];

    const randomIndexWordPokemon =
      pokemonWords[randomIndexCategory][
        Math.floor(Math.random() * [randomIndexCategory].length)
      ];
    return { randomIndexCategory, randomIndexWordPokemon };
  }, [pokemonWords]);

  const startGame = useCallback(() => {
    clearLettersStates();
    const { randomIndexCategory, randomIndexWordPokemon } =
      pickedRandomCategoryAndWord();

    let letters = randomIndexWordPokemon.split("");
    letters = letters.map((letter) => letter.toLowerCase());

    console.log(letters, randomIndexCategory, randomIndexWordPokemon);

    setPickedCategory(randomIndexCategory);
    setPickedWord(randomIndexWordPokemon);
    setLetters(letters);
    setStage(stages[1].stage);
  }, [pickedRandomCategoryAndWord]);

  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizeLetter) ||
      wrongLetters.includes(normalizeLetter)
    ) {
      return;
    }

    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizeLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      setStage(stages[2].stage);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (
      guessedLetters.length === uniqueLetters.length &&
      gameStage === "game"
    ) {
      setScore((actualScore) => (actualScore += 100));
      startGame();
    }
  }, [guessedLetters, letters, startGame, gameStage]);

  const restartGame = () => {
    setScore(0);
    setGuesses(3);
    setStage(stages[0].stage);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartGame startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          score={score}
          guesses={guesses}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
        />
      )}
      {gameStage === "gameOver" && (
        <GameOver restartGame={restartGame} score={score} />
      )}
    </div>
  );
};

export default App;
