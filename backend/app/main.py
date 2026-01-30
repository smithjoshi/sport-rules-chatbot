from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict
from backend.app.chatbot import generate_offline_response, generate_quiz
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class ChatRequest(BaseModel):
    sport: str
    message: str
    history: List[Dict[str, str]] = []

class ChatResponse(BaseModel):
    response: str

class QuizRequest(BaseModel):
    sport: str
    difficulty: str

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        response = generate_offline_response(request.sport, request.message)
        return ChatResponse(response=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/quiz")
async def get_quiz(sport: str, difficulty: str):
    try:
        questions = generate_quiz(sport, difficulty)
        return questions
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Sports Rules Assistant API is running"}
