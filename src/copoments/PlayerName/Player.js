import React from 'react';
function Player(props) {
    const el = {
        padding: "15px 20px"
    }
    return(
        <div>
            <form style={el} className="form">
                <label className="btn btn-primary" style={{marginRight: "15px"}}>
                    Player {props.symbol}:
                </label>
                <input className="form-control" type="text"  value={props.value} onChange={props.handleChangeInput} />
            </form>
        </div>
        
      );
}

export default Player;