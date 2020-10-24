import React from 'react';
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      minute: 0,
      second: 0,
      startGame: this.props.start,
      
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.start !== prevProps.start) {
      this.setState({
        startGame: this.props.start,
      })
    }
    if(this.props.resetGame !== prevProps.resetGame){
      this.setState({
        minute: 0,
        second: 0,
        startGame: this.props.start,
      })
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      200);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    let {startGame,minute, second} = this.state;
    if(startGame){
      if(second < 60){
        second += 1
      }else if(second === 60){
        minute += 1
        second = 0
        if(minute === 3){
            startGame = false
            this.props.stopGame("draw");
            minute = 0;
            second = 0;
        }
      }
    }else {
      this.props.timePlay(minute, second);
    }
    this.setState({
      minute: minute,
      second: second,
      startGame: startGame
    }) 
 }
  render(){
    const {minute, second} = this.state;
    return (
      <div className="d-inline-block p-2">
        <p>
          <span className="alert alert-success">Time To Player </span>
          <span className="alert alert-danger">{minute}:{second}</span>
        </p>
      </div>
    );
  }  
}
export default Clock;