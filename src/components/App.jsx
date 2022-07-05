import { useState } from 'react';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = ({ mark = 1 }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGoodMark = () => {
    setGood(good + mark);
  };

  const increaseNeutralMark = () => {
    setNeutral(neutral + mark);
  };

  const increaseBadMark = () => {
    setBad(bad + mark);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / (good + neutral + bad));
  };

  return (
    <>
      <Section title="Feedback">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options="Good"
          onLeaveFeedback={increaseGoodMark}
        ></FeedbackOptions>
        <FeedbackOptions
          options="Neutral"
          onLeaveFeedback={increaseNeutralMark}
        ></FeedbackOptions>
        <FeedbackOptions
          options="Bad"
          onLeaveFeedback={increaseBadMark}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <h1>Statistics</h1>
        {countTotalFeedback() ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
          : <Notification message="There is no feedback"></Notification>}
      </Section>
    </>
  );
}
export default App;