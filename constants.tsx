
import React from 'react';
import { Sport } from './types';

export const SPORTS: { id: Sport; icon: string; color: string; description: string }[] = [
  { 
    id: 'Football', 
    icon: '⚽', 
    color: 'bg-green-600',
    description: 'Understand Offsides, Fouls, VAR, and Penalties.' 
  },
  { 
    id: 'Cricket', 
    icon: '🏏', 
    color: 'bg-blue-600',
    description: 'Master LBW, Powerplays, Duckworth-Lewis, and Fielding rules.' 
  },
  { 
    id: 'Basketball', 
    icon: '🏀', 
    color: 'bg-orange-600',
    description: 'Learn Travelings, Shot Clocks, and personal fouls.' 
  },
  { 
    id: 'Tennis', 
    icon: '🎾', 
    color: 'bg-yellow-500',
    description: 'Know Deuce, Let, and the intricacies of the Tie-break.' 
  },
  { 
    id: 'Rugby', 
    icon: '🏉', 
    color: 'bg-red-700',
    description: 'Scrum basics, Knock-ons, and Offside lines.' 
  },
  { 
    id: 'Baseball', 
    icon: '⚾', 
    color: 'bg-gray-700',
    description: 'Strikes, Balls, and Infield Fly rules explained.' 
  }
];

export const SYSTEM_PROMPT = `You are the world's most friendly and knowledgeable Sports Rules Assistant. 
Your goal is to explain complex rules of sports to absolute beginners using simple language.
Key behaviors:
1. Use analogies to explain difficult concepts (e.g., explaining 'Offside' in football using a queue example).
2. Keep responses concise but comprehensive.
3. If a user asks a situational scenario, analyze it step-by-step like a referee.
4. Encourage the user to learn more and be enthusiastic about sportsmanship.
5. If asked about something outside of sports, politely redirect the conversation back to sports rules.`;
