import "./Game.css";

const Game = ({ pickedWord, pickedCategory, letters }) => {
  return (
    <div className="game">
      <p className="points">
        Pontuação: <span>0</span>
      </p>
      <h1>Adivinhe o Pokemon:</h1>
      <h3>
        Dica sobre a palavra: <span>Pokemon de Fogo</span>
      </h3>
      <p>Você ainda tem 3 tentativas</p>
      <div className="wordContainer">
        <span className="letter">A</span>
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
