import React from 'react';
import Board from '../Board/Board'
import Status from '../Status/Status';
import PlayerX from '../PlayerName/PlayerX';
import PlayerO from '../PlayerName/PlayerO';
import Clock from '../Clock/Clock';
/**
 * Manager Game
 * Board, Status, Time, Player
 */
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        status: 'game caro offline',
        nameX: '',
        nameO: '',
        isStart: false,
        isReset: false,
        isWhoWin: '',
        timePlayerPlay: []
    }
  }
  /**
   * func: change name of player
   */
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
  /**
   * func: Start Game when click start and Reset game
   */
  startGame = () => {
    const {nameX, nameO, isReset} = this.state;
    if(nameX !== '' && nameO !== ''){
      this.setState({
        isStart: true,
        isReset: !isReset,
        isWhoWin: '',
        timePlayerPlay: []
      })
    }else{
      alert("Please enter your name")
    }
  }
   /**
   * func: Stop game when player win or over time
   */
  stopGame = (value) => {
    console.log(value);
    if(value){
      this.setState({
        isStart: false,
        isWhoWin: value
      })
    }
  }
  /**
   * func: Give Time player 
   */
  timePlay = (minute, second) => {
    this.setState({
      timePlayerPlay: [minute, second]
    })
  }
    render() {
      const {status, nameX, nameO, isStart, isWhoWin, timePlayerPlay, isReset}  = this.state;
      
      return (
        <div className="container game__app">
          <div className="header alert alert-success">
            <Status 
                  value={status} 
                  playerWin={isWhoWin} 
                  timePlayerPlay={timePlayerPlay} 
                  nameX={nameX} 
                  nameO={nameO}/>
          </div>
          <div 
              className="player row justify-content-center">
              <PlayerX  
                      value={nameX} 
                      handleChangeInput={this.handleChangeInput} />
              <PlayerO  
                      value={nameO} 
                      handleChangeInput={this.handleChangeInput}/>
          </div>
          <input  
                className="btn btn-success m-2" 
                type="button" value="Start" 
                onClick={this.startGame}  />
          <div>
              <Clock  
                    start={isStart}  
                    stopGame={this.stopGame} 
                    timePlay={this.timePlay} 
                    resetGame={isReset}/>
          </div>
          <div className="game">
            <div className="game-board">
              <Board 
                    startGame={isStart} 
                    stopGame={this.stopGame} 
                    resetGame={isReset}/>
            </div>
          </div>
        </div>
        
      );
    }
}

export default Game;