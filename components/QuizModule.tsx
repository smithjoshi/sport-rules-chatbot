
import React, { useState, useEffect } from 'react';
import { Sport, QuizQuestion, QuizResult } from '../types';
import { generateQuiz } from '../services/aiService';

interface QuizModuleProps {
  sport: Sport;
  onQuizComplete: (result: QuizResult) => void;
}

const QuizModule: React.FC<QuizModuleProps> = ({ sport, onQuizComplete }) => {
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(-1); // -1 means start screen
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const startQuiz = async () => {
    setIsLoading(true);
    try {
      const newQuestions = await generateQuiz(sport, difficulty);
      setQuestions(newQuestions);
      setCurrentIdx(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } catch (error) {
      alert("Failed to load quiz. Check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer === questions[currentIdx].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz finished
      const result: QuizResult = {
        id: Date.now().toString(),
        sport,
        score,
        total: questions.length,
        difficulty,
        timestamp: Date.now()
      };
      onQuizComplete(result);
      setCurrentIdx(-2); // -2 means result screen
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-600 font-medium animate-pulse">Generating rules quiz for {sport}...</p>
      </div>
    );
  }

  // Start Screen
  if (currentIdx === -1) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border p-8 text-center">
        <div className="text-6xl mb-6">📝</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Rule Master Challenge</h2>
        <p className="text-slate-600 mb-8">Test your knowledge of {sport} rules with a dynamic AI-generated quiz.</p>

        <div className="flex justify-center gap-4 mb-8">
          {(['Easy', 'Medium', 'Hard'] as const).map(d => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${difficulty === d
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
            >
              {d}
            </button>
          ))}
        </div>

        <button
          onClick={startQuiz}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  // Result Screen
  if (currentIdx === -2) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="bg-white rounded-2xl shadow-xl border p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="text-6xl mb-4">{percentage >= 80 ? '🏆' : percentage >= 50 ? '🥈' : '🥉'}</div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Completed!</h2>
        <p className="text-slate-500 mb-6">You're becoming a real expert in {sport}!</p>

        <div className="bg-slate-50 rounded-2xl p-6 mb-8">
          <div className="text-5xl font-black text-indigo-600 mb-1">{score} / {questions.length}</div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Final Score</div>
        </div>

        <button
          onClick={() => setCurrentIdx(-1)}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all"
        >
          Try Again
        </button>
      </div>
    );
  }

  const q = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
      {/* Progress Bar */}
      <div className="h-2 bg-slate-100 w-full">
        <div
          className="h-full bg-indigo-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Question {currentIdx + 1} of {questions.length}
          </span>
          <span className="text-slate-400 text-sm font-bold">{difficulty} Mode</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-8 leading-tight">
          {q.question}
        </h3>

        <div className="space-y-4 mb-8">
          {q.options.map((opt, i) => {
            const isCorrect = opt === q.correctAnswer;
            const isSelected = opt === selectedAnswer;
            let btnClass = "w-full text-left p-4 rounded-xl border-2 font-medium transition-all ";

            if (showExplanation) {
              if (isCorrect) btnClass += "border-green-500 bg-green-50 text-green-700";
              else if (isSelected) btnClass += "border-red-500 bg-red-50 text-red-700";
              else btnClass += "border-slate-100 text-slate-400 opacity-50";
            } else {
              btnClass += "border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 text-slate-700";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                disabled={showExplanation}
                className={btnClass}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="animate-in slide-in-from-top duration-300">
            <div className="bg-indigo-50 rounded-xl p-4 mb-8 border border-indigo-100">
              <h4 className="font-bold text-indigo-900 text-sm mb-1">Explanation:</h4>
              <p className="text-indigo-800 text-sm">{q.explanation}</p>
            </div>
            <button
              onClick={nextQuestion}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
            >
              {currentIdx === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModule;
