import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

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

  <Section title="Please leave Feedback"> 
    <FeedbackOptions onGood={this.handleGood} onNeutral={this.handleNeutral} onBad={this.handleBad}/>
    <h2 className="stats-box__heading">Statistics</h2>
   {totalFeedback === 0 ? <Notification message="There is no feedback"/> : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeedback} />} 
   </Section>
    )
  }
}
  


export default App;
