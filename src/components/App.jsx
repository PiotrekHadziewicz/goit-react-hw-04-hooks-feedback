import { Component } from 'react';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

class App extends Component {
  static defaultProps = {
    mark: 1,
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGoodMark = ev => {
    this.setState((state, props) => ({
      good: state.good + props.mark,
    }));
  };

  increaseNeutralMark = ev => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.mark,
    }));
  };

  increaseBadMark = ev => {
    this.setState((state, props) => ({
      bad: state.bad + props.mark,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (100 * this.state.good) / (this.state.good + this.state.neutral + this.state.bad));
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <Section title="Feedback">
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            options="Good"
            onLeaveFeedback={this.increaseGoodMark}
          ></FeedbackOptions>
          <FeedbackOptions
            options="Neutral"
            onLeaveFeedback={this.increaseNeutralMark}
          ></FeedbackOptions>
          <FeedbackOptions
            options="Bad"
            onLeaveFeedback={this.increaseBadMark}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <h1>Statistics</h1>
          {this.countTotalFeedback() ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
            : <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    );
  }
}

export default App;
