import React from "react";
import Square from "./Square";
/**
 * class: Board Control board of caro
 */
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(900).fill(null),
      xIsNext: true,
      prevID: '',
      win: '',
    };
  }
  /**
   * function: update board
   * input: user click : index
   * output: update squares
   */
  handleClick(i) {
    // console.log(!this.state.win && this.props.startGame)
    if(!this.state.win && this.props.startGame){
      const squares = this.state.squares.slice();
      if (squares[i] === null) {
        squares[i] = this.state.xIsNext ? "X" : "O";
      }
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        prevID: i
      });
    }
  }
  /**
   *function: check win when use click square
   *input: ArrSquare, preID
   *out: update status  if win  and StopGame
   */
  componentDidUpdate(prevProps){
    if(this.state.squares !== prevProps.squares && this.state.win === ''){
      if (this.calculateWinner(this.state.squares, this.state.prevID)) {
        // console.log("You win");
        this.props.stopGame(this.state.squares[this.state.prevID])
        this.setState({
          win: this.state.squares[this.state.prevID]
        })
      }
    }
    if(this.props.resetGame !== prevProps.resetGame) {
        this.setState({
          squares: Array(900).fill(null),
          xIsNext: true,
          prevID: '',
          win: '',
        })
    }
  }
  /** 
   * Render 1 square
   * input: id: 1
   * output: 1 square 
  */
  renderSquare = (i) => {
    return (
      <Square
        key={i}
        onClick={() => this.handleClick(i)}
        value={this.state.squares[i]}
      />
    );
  };
  /** 
   * render row : 30 squares
   * input: n row;
   * output: n x 30 squares
  */
  renderRow = (n) => {
    let rowsSquare = [];
    for (let i = n; i < 30 + n; i++) {
      rowsSquare.push(this.renderSquare(i));
    }
    return rowsSquare;
  };
  /** 
   * render board : n square
   * input: n ;
   * output: n squares
  */
  renderBoard = (n) => {
    let arrBoard = [];
    for (let i = 0; i < n; i += 30) {
      arrBoard.push(this.renderRow(i));
    }
    return arrBoard;
  };
/**
 * function: calculateWinner
 * input: arr square, number: index
 * output: boolean true
 */
  calculateWinner = (squares, index) => {
    // creat arr need to check 
    const lines = [
      // row 
      [
        index - 4,
        index - 3,
        index - 2,
        index - 1,
        index,
        index + 1,
        index + 2,
        index + 3,
        index + 4,
      ],
      // cols 
      [
        index - 120,
        index - 90,
        index - 60,
        index - 30,
        index,
        index + 30,
        index + 60,
        index + 90,
        index + 120,
      ],    
      // cross
      [
        index - 120 - 4,
        index - 90 - 3,
        index - 60 - 2,
        index - 30 - 1,
        index,
        index + 30 + 1,
        index + 60 + 2,
        index + 90 + 3,
        index + 120 + 4,
      ],
      // cross
      [
        index + 120 - 4,
        index + 90 - 3,
        index + 60 - 2,
        index + 30 - 1,
        index,
        index - 30 + 1,
        index - 60 + 2,
        index - 90 + 3,
        index - 120 + 4,
      ],
    ];
  // check in arr  1 -5; 2-6 ; 3-7 ; 4-8 ; 5 - 9
    // const result = [];
    for (let i = 0; i < 5; i += 1) {
      const [a, b, c, d, e] = [
        lines[0][i],
        lines[0][i + 1],
        lines[0][i + 2],
        lines[0][i + 3],
        lines[0][i + 4],
      ];
      const checkRow = this.checkRim([a, b, c, d]);
    /**
     * TH1: rows
     */
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c] &&
        squares[c] === squares[d] &&
        squares[d] === squares[e] &&
        checkRow &&
        (squares[a - 1] === squares[a] ||
          squares[a - 1] === null ||
          squares[a - 1] === undefined ||
          squares[e + 1] === squares[a] ||
          squares[e + 1] === null ||
          squares[e + 1] === undefined)
      ) {
        // result.push(squares[a]);
        // result.push([a, b, c, d, e]);
        // return result;
        return true;
      }
    /**
     * TH2: cols
     */
      const [aa, bb, cc, dd, ee] = [
        lines[1][i],
        lines[1][i + 1],
        lines[1][i + 2],
        lines[1][i + 3],
        lines[1][i + 4],
      ];
      if (
        squares[aa] &&
        squares[aa] === squares[bb] &&
        squares[bb] === squares[cc] &&
        squares[cc] === squares[dd] &&
        squares[dd] === squares[ee] &&
        (squares[aa - 30] === squares[aa] ||
          squares[aa - 30] === null ||
          squares[aa - 30] === undefined ||
          squares[ee + 30] === squares[aa] ||
          squares[ee + 30] === null ||
          squares[ee + 30] === undefined)
      ) {
        // result.push(squares[aa]);
        // result.push([aa, bb, cc, dd, ee]);
        // return result;
        return true;

      }
      /**
       * TH3: cross
       */
      const [aaa, bbb, ccc, ddd, eee] = [
        lines[2][i],
        lines[2][i + 1],
        lines[2][i + 2],
        lines[2][i + 3],
        lines[2][i + 4],
      ];
      if (
        squares[aaa] &&
        squares[aaa] === squares[bbb] &&
        squares[bbb] === squares[ccc] &&
        squares[ccc] === squares[ddd] &&
        squares[ddd] === squares[eee] &&
        checkRow &&
        (squares[aaa - 30 - 1] === squares[aaa] ||
          squares[aaa - 30 - 1] === null ||
          squares[aaa - 30 - 1] === undefined ||
          squares[eee + 30 + 1] === squares[aaa] ||
          squares[eee + 30 + 1] === null ||
          squares[eee + 30 + 1] === undefined)
      ) {
        // result.push(squares[aaa]);
        // result.push([aaa, bbb, ccc, ddd, eee]);
        // return result;
        return true
      }
  
      const [aaaa, bbbb, cccc, dddd, eeee] = [
        lines[3][i],
        lines[3][i + 1],
        lines[3][i + 2],
        lines[3][i + 3],
        lines[3][i + 4],
      ];
      if (
        squares[aaaa] &&
        squares[aaaa] === squares[bbbb] &&
        squares[bbbb] === squares[cccc] &&
        squares[cccc] === squares[dddd] &&
        squares[dddd] === squares[eeee] &&
        checkRow &&
        (squares[aaaa + 30 - 1] === squares[aaaa] ||
          squares[aaaa + 30 - 1] === null ||
          squares[aaaa + 30 - 1] === undefined ||
          squares[eeee - 30 + 1] === squares[aaaa] ||
          squares[eeee - 30 + 1] === null ||
          squares[eeee - 30 + 1] === undefined)
      ) {
        // result.push(squares[aaaa]);
        // result.push([aaaa, bbbb, cccc, dddd, eeee]);
        // return result;
        return true
      }
    }
    return null;
  }
  /**
   * check touch border
   */
  checkRim = (arr) => {
    if (arr[0] % 10 === 9 && Math.floor(arr[0] / 10) % 2 === 1) return false;
    if (arr[1] % 10 === 9 && Math.floor(arr[1] / 10) % 2 === 1) return false;
    if (arr[2] % 10 === 9 && Math.floor(arr[2] / 10) % 2 === 1) return false;
    if (arr[3] % 10 === 9 && Math.floor(arr[3] / 10) % 2 === 1) return false;
    return true;
  };
  // render 

  
  render() {
    return <div className="Board-game">{this.renderBoard(900)}</div>;
  }
}

export default Board;
