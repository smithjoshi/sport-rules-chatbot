import React from 'react';
import Layout from './components/Layout';
import ChatInterface from './components/ChatInterface';
import QuizModule from './components/QuizModule';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { AppMode } from './types';
import { useAppLogic } from './hooks/useAppLogic';

const App: React.FC = () => {
  const {
    activeMode,
    setActiveMode,
    selectedSport,
    setSelectedSport,
    quizHistory,
    handleQuizComplete
  } = useAppLogic();

  return (
    <Layout
      activeMode={activeMode}
      onModeChange={setActiveMode}
      selectedSport={selectedSport}
      onSportChange={setSelectedSport}
    >
      <div className={activeMode === AppMode.Chat ? 'h-full' : 'hidden'}>
        <ChatInterface sport={selectedSport} />
      </div>

      {activeMode === AppMode.Quiz && (
        <QuizModule sport={selectedSport} onQuizComplete={handleQuizComplete} />
      )}

      {activeMode === AppMode.Analytics && (
        <AnalyticsDashboard results={quizHistory} />
      )}
    </Layout>
  );
};

export default App;
