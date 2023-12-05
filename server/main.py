from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()
messages = []


class Message(BaseModel):
    content: str
    sender: str


@app.post("/send_message")
def send_message(message: Message):
    messages.append(message.dict())
    return {"message": "Message sent successfully"}


@app.get("/get_messages", response_model=List[Message])
def get_messages():
    return messages
