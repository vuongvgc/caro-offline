import React from 'react';
import Board from '../Board/Board'
import Status from '../Status/Status';
import PlayerX from '../PlayerName/PlayerX';
import PlayerO from '../PlayerName/PlayerO';
import Clock from '../Clock/Clock';
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        status: 'game caro offline',
        nameX: 'Victor',
        nameO: 'Vuong',
        isStart: false
    }
  }
  handleChangeInput = (value,a) => {
    if(a === 'X') {
      this.setState({
        nameX:  value
      })
    }else {
      this.setState({
        nameO: value
      })
    }
  }
  startGame = () => {
    const {nameX, nameO} = this.state;
    if(nameX !== '' && nameO !== ''){
      this.setState({
        isStart: true
      })
    }else{
      alert("Please enter your name")
    }
  }
    render() {
      const {status, nameX, nameO}  = this.state;
      
      return (
        <div className="container">
          <div className="header">
            <Status value={status} />
          </div>
          <div style={{padding: "15px"}} className="player">
              <PlayerX value={nameX} handleChangeInput={this.handleChangeInput} />
              <PlayerO value={nameO} handleChangeInput={this.handleChangeInput}/>
              <input type="button" value="Start" onClick={this.startGame} />
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