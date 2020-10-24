import React from 'react';
function Status(props){
  let status = props.playerWin !== '' 
  ? `Player ${props.playerWin} is Win with Time`
  : `Enter player to play game`  
  return (
    <header>
      <h1>{props.value}</h1>
      <h2>{status}</h2>
    </header>
  );
}

export default Status;