
import React from 'react';
import { AppMode, Sport } from '../types';
import { SPORTS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeMode: AppMode;
  onModeChange: (mode: AppMode) => void;
  selectedSport: Sport;
  onSportChange: (sport: Sport) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeMode, onModeChange, selectedSport, onSportChange }) => {
  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
             <span className="text-white text-xl">⚽️</span>
          </div>
          <div>
            <h1 className="font-sports text-2xl tracking-tight text-slate-900 leading-none">Sport Chatbot</h1>
            <p className="text-xs text-slate-500 font-medium">Your AI Sports Chatbot</p>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-slate-100 rounded-full p-1">
          {(['chat', 'quiz', 'analytics'] as AppMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => onModeChange(mode)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeMode === mode 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <select 
            value={selectedSport}
            onChange={(e) => onSportChange(e.target.value as Sport)}
            className="bg-slate-100 border-none rounded-lg px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-indigo-500"
          >
            {SPORTS.map(s => (
              <option key={s.id} value={s.id}>{s.icon} {s.id}</option>
            ))}
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative bg-slate-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto h-full">
          {children}
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden bg-white border-t px-4 py-3 flex justify-around items-center sticky bottom-0 z-50">
        <button 
          onClick={() => onModeChange(AppMode.Chat)}
          className={`flex flex-col items-center gap-1 ${activeMode === AppMode.Chat ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <span className="text-xl">💬</span>
          <span className="text-[10px] font-bold uppercase">Chat</span>
        </button>
        <button 
          onClick={() => onModeChange(AppMode.Quiz)}
          className={`flex flex-col items-center gap-1 ${activeMode === AppMode.Quiz ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <span className="text-xl">📝</span>
          <span className="text-[10px] font-bold uppercase">Quiz</span>
        </button>
        <button 
          onClick={() => onModeChange(AppMode.Analytics)}
          className={`flex flex-col items-center gap-1 ${activeMode === AppMode.Analytics ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <span className="text-xl">📊</span>
          <span className="text-[10px] font-bold uppercase">Stats</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
