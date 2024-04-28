import React, { useState } from 'react';

const QuestionComponent = ({ question, onSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(question, selectedAnswer);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <form>
        {question.answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              value={answer.answer}
              checked={selectedAnswer === answer.answer}
              onChange={handleOptionChange}
            />
            {answer.answer}
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>Відповісти</button>
    </div>
  );
};

export default QuestionComponent;
