import { useState, useRef } from "react";

import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  score,
  guesses,
  guessedLetters,
  wrongLetters,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        Pontuação: <span>{score}</span>
      </p>
      <h1>Adivinhe o Pokemon:</h1>
      <h3>
        Dica sobre o Pokemon: <span>Pokemon de {pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index} className="letter">
              {letter}
            </span>
          ) : (
            <span key={index} className="blackSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
        <div className="wrongLettersContainer">
          <p>Letras ja utilizadas:</p>
          {wrongLetters.map((letter, index) => (
            <span key={index}>{letter}, </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
