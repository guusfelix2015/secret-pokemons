import "./StartGame.css";

const StartGame = ({ startGame }) => {
  return (
    <div className="startGame">
      <h1>Secret Pokemon Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar jogo</button>
    </div>
  );
};

export default StartGame;
