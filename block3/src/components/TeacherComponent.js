import React, { useState } from 'react';

const TeacherComponent = ({ questions, startTest }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const toggleQuestion = (question) => {
    if (selectedQuestions.includes(question)) {
      setSelectedQuestions(selectedQuestions.filter(q => q !== question));
    } else {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };

  return (
    <div>
      <h2>Виберіть питання для тесту:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedQuestions.includes(question)}
              onChange={() => toggleQuestion(question)}
            />
            {question.question}
          </li>
        ))}
      </ul>
      <button onClick={() => startTest(selectedQuestions)}>Почати тест</button>
    </div>
  );
};

export default TeacherComponent;
