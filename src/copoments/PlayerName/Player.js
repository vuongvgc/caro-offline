import React from 'react';
function Player(props) {
    const el = {
        padding: "15px 20px"
    }
    return(
        <div>
            <form style={el} className="form">
                <label style={{marginRight: "15px"}}>
                    Player {props.symbol}:
                </label>
                <input type="text"  value={props.value} onChange={props.handleChangeInput} />
            </form>
        </div>
        
      );
}

export default Player;