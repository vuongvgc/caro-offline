import React from 'react';
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stopGame: false,
      minute: 0,
      second: 0,
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    let {stopGame, minute, second} = this.state
    if(stopGame === false){
      if(second < 60){
        second += 1
      }else if(second === 60){
        minute += 1
        second = 0
        if(minute === 3){
            stopGame = true
        }
      }
    }
    
    console.log(minute)
    this.setState({
      stopGame: stopGame,
      minute: minute,
      second: second
    })
  }
  render(){
    const {minute, second} = this.state
    return (
      <div>
        <h1>Time To Player </h1>
        <h2>{minute}:{second}</h2>
      </div>
    );
  }  
}
export default Clock;