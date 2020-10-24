import React from 'react';
function Square(props) {
    let colorSquare = props.value === "X" ? "red" : "green"
    return (
      <button className="square" style={{color: colorSquare}} onClick={props.onClick}>
        {props.value}
        {/* {props.hienthi} */}
      </button>
    );
  }
export default Square;
