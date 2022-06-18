import "./GameOver.css";

const GameOver = ({ restartGame, score }) => {
  return (
    <div className="containerGameOver">
      <h1>Fim de jogo!</h1>
      <p>
        Sua pontuação foi de <span>{score}</span> PONTOS....
      </p>
      <button onClick={restartGame}>Jogar novamente</button>
    </div>
  );
};

export default GameOver;
