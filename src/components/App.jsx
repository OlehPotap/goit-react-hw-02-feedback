import React from 'react';

class App extends React.Component  {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleGood = event => {
    this.setState(actualGoodState => ({good: actualGoodState.good + 1}))
  }

  handleNeutral = event => {
    this.setState(actualNeutralState => ({neutral: actualNeutralState.neutral + 1}))
  }
  

  handleBad = event => {
    this.setState(actualBadlState => ({bad: actualBadlState.bad + 1}))
  }

  render(){
    let totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    let percentage = this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100;
    return (
      <div className="container" style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '60px', 
        paddingBottom: '60px',
        backgroundColor: '#007ACC',
      }}>
  
  <div className="feedback">
    <div  className="feedback__buttom-box button-box">
    <h1 className="button-box__heading">Please leave feedback</h1>
    <ul className="button-box__list">
      <li className="button-box__list-item">
        <button className="button-box__button" onClick={this.handleGood}>Good</button>
      </li>
      <li className="button-box__list-item">
        <button className="button-box__button" onClick={this.handleNeutral}>Neutral</button>
      </li>
      <li className="button-box__list-item">
        <button className="button-box__button" onClick={this.handleBad}>Bad</button>
      </li>
    </ul>
    </div>
    <div className="feedback__stats-box stats-box">
      <h2 className="stats-box__heading">Statistics</h2>
      <ul className="stats-box__list">
        <li className="stats-box__list-item">Good: {this.state.good}</li>
        <li className="stats-box__list-item">Nautral: {this.state.neutral}</li>
        <li className="stats-box__list-item">Bad: {this.state.bad}</li>
        <li className="stats-box__list-item">Total: {totalFeedback}</li>
        <li className="stats-box__list-item">Positive percentage: {totalFeedback === 0 ? "No feedback yet" : `${Math.trunc(percentage)}%`}</li>
      </ul>
    </div>
  </div>
  </div>
    )
  }
}
  


export default App;
