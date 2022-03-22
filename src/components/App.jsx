import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

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
    return (
      <div className="container" style={{
        width: '600px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '50px',
        boxShadow: '0px 0px 6px 5px rgba(34, 60, 80, 0.2)',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '60px', 
        paddingBottom: '60px',
        backgroundColor: '#22A6F2',
      }}>
  
  <div className="feedback">
    <FeedbackOptions onGood={this.handleGood} onNeutral={this.handleNeutral} onBad={this.handleBad}/>
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeedback} />
  </div>
  </div>
    )
  }
}
  


export default App;
