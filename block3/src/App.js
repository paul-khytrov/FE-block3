import React, { useState } from 'react';
import TeacherComponent from './components/TeacherComponent';
import TestPageComponent from './components/TestPageComponent';
import ResultComponent from './components/ResultComponent';
import testData from './testData.json';
import './App.css'

const App = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showTest, setShowTest] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const startTest = (selectedQuestions) => {
    setSelectedQuestions(selectedQuestions);
    setShowTest(true);
  };

  const submitAnswer = (question, answer) => {
    setAnswers({ ...answers, [question.question]: answer });
  };

  const showResults = () => {
    setShowTest(false);
    setShowResult(true);
  };

  const calculateCorrectAnswers = () => {
    let correctCount = 0;
    selectedQuestions.forEach(question => {
      const correctAnswer = question.answers.find(ans => ans.isCorrect);
      if (answers[question.question] === correctAnswer.answer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  return (
    <div>
      <h1>Моя тестова програма</h1>
      {!showTest && !showResult && (
        <TeacherComponent
          questions={testData.questions}
          startTest={startTest}
        />
      )}
      {showTest && (
        <TestPageComponent
          questions={selectedQuestions}
          onSubmit={submitAnswer}
        />
      )}
      {showResult && (
        <ResultComponent
          correctAnswersCount={calculateCorrectAnswers()}
          totalQuestions={selectedQuestions.length}
        />
      )}
      <button onClick={showResults}>Переглянути результат</button>
    </div>
  );
};

export default App;
