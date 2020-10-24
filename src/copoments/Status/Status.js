import React from 'react';
function Status(props){
  let {playerWin, timePlayerPlay, nameX, nameO} = props
  let status = playerWin !== '' 
  ? playerWin === "X" || playerWin === "O"
    ? `Player ${playerWin} is Win with time: ${timePlayerPlay[0]} minute ${timePlayerPlay[1]} second `
    : `Over Time. Player draw`
  : nameO !== '' && nameX !== ''
    ? `${nameX} & ${nameO}`
    :`Enter player to play game`  
  return (
    <header>
      <h1>{props.value}</h1>
      <h2>{status}</h2>
    </header>
  );
}

export default Status;