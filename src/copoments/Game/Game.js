import React from 'react';
import Board from '../Board/Board'
import Status from '../Status/Status';
import PlayerX from '../PlayerName/PlayerX';
import PlayerO from '../PlayerName/PlayerO';
import Clock from '../Clock/Clock';
class Game extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="header">
            <Status />
          </div>
          <div style={{padding: "15px"}} className="player">
              <PlayerX />
              <PlayerO />
              <button>Start</button>
          </div>
          <div style={{padding: "15px"}}>
              <Clock />
          </div>
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
            </div>
        </div>
        </div>
        
      );
    }
}

export default Game;