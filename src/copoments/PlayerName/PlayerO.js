import React from 'react';
import Player from './Player';
/**
 * Player Game O
 */
class PlayerO extends React.Component {
    ChangeName = (event) => {
        this.props.handleChangeInput(event.target.value, 'O')
    }
    render(){
        return(
            <div className="player__item">
                <Player symbol={"O"} value={this.props.value} handleChangeInput={this.ChangeName} />
            </div>
            
          ); 
    }
    
}

export default PlayerO;