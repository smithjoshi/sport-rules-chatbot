
import React, { useState, useRef, useEffect } from 'react';
import { Sport, Message } from '../types';
import { getChatResponse } from '../services/aiService';
import MessageBubble from './MessageBubble';
import { SPORTS_DATA } from '../data/sportsData';

interface ChatInterfaceProps {
  sport: Sport;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ sport }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `👋 Hello! I'm your ${sport} rules expert. Ask me anything about how the game is played, or give me a tricky scenario to explain!`,
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');

  // Update welcome message if sport changes and no interaction yet
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === '1') {
        return [{
          id: '1',
          role: 'assistant',
          content: `👋 Hello! I'm your ${sport} rules expert. Ask me anything about how the game is played, or give me a tricky scenario to explain!`,
          timestamp: Date.now()
        }];
      }
      return prev;
    });
  }, [sport]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate slight delay for better UX
    setTimeout(async () => {
      try {
        const history = messages.map(m => ({ role: m.role, content: m.content }));
        const response = await getChatResponse(sport, history, input);

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response || "I'm sorry, I couldn't process that. Can you rephrase?",
          timestamp: Date.now()
        };

        setMessages(prev => [...prev, assistantMessage]);
      } catch (error) {
        console.error(error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "Oops! Something went wrong. Please try again.",
          timestamp: Date.now()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }, 300);
  };

  const handleClearChat = () => {
    setMessages([{
      id: Date.now().toString(),
      role: 'assistant',
      content: `Chat cleared! 👋 I'm still here to help with ${sport} rules. What would you like to know?`,
      timestamp: Date.now()
    }]);
  };

  // Get popular FAQs for quick buttons
  const quickQuestions = SPORTS_DATA[sport].faqs.slice(0, 4).map(faq => faq.q);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            {sport} Rules Assistant
          </h2>
          <p className="text-indigo-100 text-xs mt-0.5"></p>
        </div>
        <button
          onClick={handleClearChat}
          className="text-white/80 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all"
        >
          Clear Chat
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(203 213 225 / 0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}
      >
        {messages.map((msg, idx) => (
          <div key={msg.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: `${idx * 50}ms` }}>
            <MessageBubble message={msg} />
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-white px-5 py-4 rounded-2xl rounded-tl-sm shadow-md border border-slate-200 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span className="text-slate-500 text-sm ml-1">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      <div className="px-6 py-3 bg-white border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-500 mb-2">💡 Quick Questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question) => (
            <button
              key={question}
              onClick={() => { setInput(question); }}
              className="text-xs font-medium bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200 px-3 py-2 rounded-lg hover:from-indigo-100 hover:to-purple-100 hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-slate-200">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Ask me anything about ${sport}...`}
            className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold text-sm flex items-center gap-2"
          >
            <span>Send</span>
            <span className="text-lg">🚀</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
