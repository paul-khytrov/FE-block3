import React from 'react';

const ResultComponent = ({ correctAnswersCount, totalQuestions }) => {
  return (
    <div>
      <h2>Результат</h2>
      <p>Ви відповіли правильно на {correctAnswersCount} з {totalQuestions} питань.</p>
    </div>
  );
};

export default ResultComponent;
