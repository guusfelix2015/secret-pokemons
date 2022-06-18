import "./Game.css";

const Game = ({ pickedWord, pickedCategory, letters, score, guesses }) => {
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
        <span className="letter"></span>
        <span className="blackSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button>Jogar</button>
        </form>
      </div>
    </div>
  );
};

export default Game;
