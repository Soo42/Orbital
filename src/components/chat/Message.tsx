import React from 'react';
import { Message } from '../../types'; 
import { useState } from 'react';

function MessageInput() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: messages.length + 1,
      sender: "user",
      content: input.trim(),
    };

    setMessages((prev: Message[]) => [...prev, userMsg]);

    setTimeout(() => {
      const botMsg: Message = {
        id: messages.length + 2,
        sender: "other user",
        content: `not implemented yet:`,
      };
    setMessages((prev: Message[]) => [...prev, botMsg]);
    }, 500);

    setInput(""); // Clear input
  };


    function isPinMessage(id: number) {
        return id === 1;
    }
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        <h2>Chat Messages</h2>
        <div
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                height: "500px",
                overflowY: "auto",
                marginBottom: "10px",
            }}
        >
        {messages.map((msg) => (
            <div
                key={msg.id}
                style={{
                    display: "flex",
                    position: isPinMessage(msg.id) ? "sticky" : "relative",
                    // justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                    backgroundColor: msg.sender === "user" ? "#abcdef" : "#f8d7da",
                    maxWidth: "60%",
                    width: "fit-content", 
                    padding: "10px",
                    margin: "5px 0",
                    wordBreak: "break-word",
                    marginLeft: msg.sender === "user" ? "auto" : "0", // push user messages to right
                    marginRight: msg.sender !== "user" ? "auto" : "0", 
                    color: "black",
                }}
            >
            {msg.content}
            </div>
        ))}
        </div>
        <div style={{display: "flex"}}><input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            style={{ width: "80%", marginRight: "10px" }}/>
            <button onClick={sendMessage} style={{width: "20%"}}>Send</button>
        </div>
    </div>
  );
}

export default MessageInput;