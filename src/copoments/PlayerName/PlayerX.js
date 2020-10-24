import React from 'react';
import Player from './Player';
/**
 * Player Game X
 */
class PlayerX extends React.Component {
    ChangeName = (event) => {
        this.props.handleChangeInput(event.target.value, 'X')
    }
    render(){
        return(
            <div className="player__item">
                <Player symbol={"X"} value={this.props.value} handleChangeInput={this.ChangeName} />
            </div>
            
          ); 
    }
    
}

export default PlayerX;