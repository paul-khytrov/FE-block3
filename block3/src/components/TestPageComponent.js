import React from 'react';
import QuestionComponent from './QuestionComponent';

const TestPageComponent = ({ questions, onSubmit }) => {
  return (
    <div>
      <h2>Тест</h2>
      {questions.map((question, index) => (
        <QuestionComponent key={index} question={question} onSubmit={onSubmit} />
      ))}
    </div>
  );
};

export default TestPageComponent;
