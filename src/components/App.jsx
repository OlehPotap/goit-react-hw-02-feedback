import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = property => {
    this.setState(prevState => {
      const value = prevState[property];
      return {
        [property]: value + 1,
      };
    });
  };

  totalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  render() {
    
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            feedback={this.handleFeedback}
            options={this.state}
          />

          <h2 className="stats-box__heading">Statistics</h2>
          {this.totalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
