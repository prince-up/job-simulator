import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SkillsAssessment.css';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What is your experience level with programming?',
    options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    category: 'general'
  },
  {
    id: 2,
    question: 'Which databases are you familiar with?',
    options: ['SQL', 'NoSQL', 'Both', 'None'],
    category: 'technical'
  },
  {
    id: 3,
    question: 'How comfortable are you with version control systems?',
    options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    category: 'tools'
  },
  {
    id: 4,
    question: 'What is your experience with cloud platforms?',
    options: ['No experience', 'Basic knowledge', 'Intermediate', 'Advanced'],
    category: 'infrastructure'
  },
  {
    id: 5,
    question: 'Rate your problem-solving skills',
    options: ['Below Average', 'Average', 'Good', 'Excellent'],
    category: 'soft-skills'
  },
];

export default function SkillsAssessment() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = QUIZ_QUESTIONS[currentQuestion];
  const isAnswered = answers[question.id] !== undefined;

  const handleSelectOption = (option) => {
    setAnswers({
      ...answers,
      [question.id]: option
    });
  };

  const handleNext = () => {
    if (!isAnswered) {
      alert('Please answer the question');
      return;
    }
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // TODO: Save assessment results
      console.log('Assessment complete:', answers);
      navigate('/jobs');
    }
  };

  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="skills-assessment-page">
      <div className="assessment-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="question-counter">
          Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
        </div>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${answers[question.id] === option ? 'selected' : ''}`}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'Complete Assessment' : 'Next'}
        </button>
      </div>
    </div>
  );
}
