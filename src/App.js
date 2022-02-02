import React, { useState } from 'react';
import FeedbackOptions from "./Components/FeedbackOptions";
import Section from "./Components/Section";
import Statistics from "./Components/Statistics";
import Notification from "./Components/Notification";

const App = () => {

  
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setbadFeedback] = useState(0);

  const onLeaveFeedback = event => {
    const name = event.target.id;

    if (name === 'good') {
      setGoodFeedback(prevState => prevState + 1);
    } else if (name === 'neutral') {
      setNeutralFeedback(prevState => prevState + 1);
    } else if (name === 'bad') {
      setbadFeedback(prevState => prevState + 1);
    }
  };

 
 const countTotalFeedbacks = () => {
  const totalFeedbacks = good + neutral + bad;

  return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedbacks();

    return Math.round((good / totalFeedbacks) * 100 || 0);
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const totalFeedbacks = countTotalFeedbacks();
  const positivePercent = countPositiveFeedbackPercentage();

  return (
      <>
        <Section title="Please leave feedback" totalFeedbacks={totalFeedbacks}>
          <FeedbackOptions
            options={feedbackOptions} onLeaveFeedback={onLeaveFeedback} />
         
        </Section>
        <Section title="Statistics">
        {totalFeedbacks > 0 ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positivePercent}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }

export default App;
