import React from 'react';
/**
 * Player Game
 */
function Player(props) {
    return(
        <div>
            <form className="m-1">
                <label className="btn btn-primary" style={{marginRight: "15px"}}>
                    Player {props.symbol}:
                </label>
                <input className="form-control" type="text"  value={props.value} onChange={props.handleChangeInput} />
            </form>
        </div>
        
      );
}

export default Player;