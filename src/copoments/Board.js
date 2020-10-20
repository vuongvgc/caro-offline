import React from 'react';
import Square from './Square';
class Board extends React.Component {
  clickBTN = () => {
    console.log("click")
  }
  renderSquare = (i) => {
     return( <Square key={i} onClick={this.clickBTN} value={i}/>)
  }
  renderRow = (n) => {
    let rowsSquare = []
    for(let i = n ; i < 30 + n ; i ++) {
      rowsSquare.push(this.renderSquare(i));
    }
    return rowsSquare
  }
  renderBoard = (n) => {
    let arrBoard = [];
    for(let i = 1; i <= n; i += 30 ){
      arrBoard.push(this.renderRow(i));
    }
    return arrBoard
  }
  render(){
    return(
        <div>
            {this.renderBoard(900)}
        </div>
    )
  }

  }
export default Board;