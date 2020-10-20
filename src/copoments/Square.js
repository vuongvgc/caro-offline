import React from 'react';
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
        {props.hienthi}
      </button>
    );
  }
export default Square;