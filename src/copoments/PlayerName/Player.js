import React from 'react';
function Player(props) {
    const el = {
        padding: "15px 20px"
    }
    return(
        <div>
            <form style={el} className="form">
                <label style={{marginRight: "15px"}} for="player">
                    Player X O 
                </label>
                <input id="player" type="text" />
            </form>
        </div>
        
      );
}

export default Player;