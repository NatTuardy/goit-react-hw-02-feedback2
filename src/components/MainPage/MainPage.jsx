import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../statistics/Statistics";
import Section from "../sectionTitle/Section";
import Notification from "../Notification/Notification";
import { copyInNewObject } from "../helpers/copyInNewObject";
import { hasCountTotal } from "../helpers/hasCountTotal";

class MainPage extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (name) => {
    const newName = name.toLowerCase();
    this.setState((prevState) => ({
      [newName]: prevState[newName] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const newState = copyInNewObject(this.state);
    const positive = Object.values(newState)[0];
    const total = hasCountTotal(newState);
    return Math.round((positive / total) * 100);
  };

  countTotalFeedback = () => {
    const newState = copyInNewObject(this.state);
    const total = hasCountTotal(newState);
    return total;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              data={this.state}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default MainPage;
