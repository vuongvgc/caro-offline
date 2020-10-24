import React from 'react';
/**
 * Status
 * Play Game, Win, OverTime
 */
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
      <h2 className="text-uppercase">{props.value}</h2>
      <p>{status}</p>
    </header>
  );
}

export default Status;