import React, { useState } from "react";
import axios from "axios";
import "../css/Plantwhisperer.css";

const Plantwhisperer = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 🌿 I’m Plantwhisperer. Ask me anything about your plants!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/plantwhisperer", {
        message: input
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.data.response || "Sorry, I couldn't find an answer." }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry 🌱 Something went wrong while getting a response." }
      ]);
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <button className="plantwhisperer-float-btn" onClick={() => setOpen(!open)}>
        🌿
      </button>

      {open && (
        <div className="plantwhisperer-chat-box">
          <div className="plantwhisperer-header">
            <h5>Plantwhisperer</h5>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="plantwhisperer-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "user" ? "message user" : "message bot"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="plantwhisperer-input-area">
            <input
              type="text"
              placeholder="Ask about your plant..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Plantwhisperer;