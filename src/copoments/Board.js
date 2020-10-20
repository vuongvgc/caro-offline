import React from 'react';
import Square from './Square';
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(900).fill(null),
      xIsNext: true,
    };
  }
 
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare = (i) => {
     return( 
     <Square  key={i} 
              onClick={() => this.handleClick(i)} 
              value={this.state.squares[i]}
              hienthi = {i}
              />
              
     )
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