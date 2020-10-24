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
        nameX: '',
        nameO: '',
        isStart: false,
        isWhoWin: '',
        timePlayerPlay: []
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
    const {nameX, nameO, isReset} = this.state;
    if(nameX !== '' && nameO !== ''){
      this.setState({
        isStart: true,
        isWhoWin: '',
        timePlayerPlay: []
      })
    }else{
      alert("Please enter your name")
    }
  }
  stopGame = (value) => {
    console.log(value);
    if(value){
      this.setState({
        isStart: false,
        isWhoWin: value
      })
    }
  }
  timePlay = (minute, second) => {
    this.setState({
      timePlayerPlay: [minute, second]
    })
  }
  resetGame = () => {
    console.log("Reset")
  }
    render() {
      const {status, nameX, nameO, isStart, isWhoWin, timePlayerPlay, isReset}  = this.state;
      
      return (
        <div className="container">
          <div className="header">
            <Status value={status} playerWin={isWhoWin} timePlayerPlay={timePlayerPlay} nameX={nameX} nameO={nameO}/>
          </div>
          <div style={{padding: "15px"}} className="player">
              <PlayerX value={nameX} handleChangeInput={this.handleChangeInput} />
              <PlayerO value={nameO} handleChangeInput={this.handleChangeInput}/>
              <input type="button" value="Start" onClick={this.startGame}  />
              <form style={{padding: "15px"}}>
                <button type="submit" onClick={this.resetGame}>ResetGame</button>
              </form>
          </div>
          <div style={{padding: "10px"}}>
              <Clock start={isStart}  stopGame={this.stopGame} timePlay={this.timePlay} resetGame={isReset}/>
          </div>
          <div className="game">
            <div className="game-board">
              <Board startGame={isStart} stopGame={this.stopGame} resetGame={isReset}/>
            </div>
          </div>
        </div>
        
      );
    }
}

export default Game;