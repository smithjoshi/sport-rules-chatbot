
import { useState, useEffect } from 'react';
import { AppMode, Sport, QuizResult } from '../types';

export const useAppLogic = () => {
    const [activeMode, setActiveMode] = useState<AppMode>(AppMode.Chat);
    const [selectedSport, setSelectedSport] = useState<Sport>('Football');
    const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);

    // Load history from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('sports_rules_history');
        if (saved) {
            try {
                setQuizHistory(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load local history", e);
            }
        }
    }, []);

    // Save history to localStorage
    useEffect(() => {
        localStorage.setItem('sports_rules_history', JSON.stringify(quizHistory));
    }, [quizHistory]);

    const handleQuizComplete = (result: QuizResult) => {
        setQuizHistory(prev => [...prev, result]);
    };

    return {
        activeMode,
        setActiveMode,
        selectedSport,
        setSelectedSport,
        quizHistory,
        handleQuizComplete
    };
};
