import React, { useState } from 'react';
import './App.css';

function App() {
  // hooks
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  // event handlers
  const handleBalls = () => {
    if(balls < 3){
      setBalls(balls + 1);

      return 1;
    }else {
      handleHit();
    }
  }
  const handleStrikes = () => {
    if(strikes < 2){
      setStrikes(strikes + 1);

      return strikes;
    }else {
      return handleHit();
    }
  }
  const handleFouls = () => {
    if(strikes < 2) {
      setStrikes(strikes + 1);

      return strikes;
    }
  }
  const handleHit = () => {
    setBalls(0);
    setStrikes(0);
  }

  return (
    <div className="scoreboard">
      <div className="display">

        Count:
        <div className="count">
          <span>Balls: {balls}</span>
          <span>Strikes: {strikes}</span>
        </div>
      </div>
      <div className="dashboard">
        <button onClick={handleBalls}>balls</button>
        <button onClick={handleStrikes}>strikes</button>
        <button onClick={handleFouls}>fouls</button>
        <button onClick={handleHit}>hit</button>
      </div>
    </div>
  );
}

export default App;
