import { Sport, QuizQuestion } from "../types";

const API_URL = "http://localhost:8000";

// Chatbot Service connecting to Python Backend
export async function getChatResponse(sport: Sport, history: { role: string, content: string }[], message: string): Promise<string> {
    try {
        const response = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sport,
                message,
                history
            }),
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Error fetching chat response:", error);
        return "Sorry, I'm having trouble connecting to the server. Please make sure the Python backend is running.";
    }
}

export async function generateQuiz(sport: Sport, difficulty: string): Promise<QuizQuestion[]> {
    try {
        const response = await fetch(`${API_URL}/quiz?sport=${sport}&difficulty=${difficulty}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data as QuizQuestion[];
    } catch (error) {
        console.error("Error fetching quiz:", error);
        throw new Error("Failed to load quiz. Is the backend running?");
    }
}
