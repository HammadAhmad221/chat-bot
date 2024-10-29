import React, { useState } from "react";
import Message from "./Message";
import InputArea from "./InputArea";
import TopBar from "./Topbar";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "How can I tell if my tree is diseased?", sender: "user" },
    {
      id: 2,
      text: "Look for signs like discolored leaves, unusual growths on the trunk, wilting, or dead branches. Upload a photo, and I can help identify the issue.",
      sender: "bot",
    },
  ]);

  const getBotResponse = (userMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: "This is a sample response from the bot.",
          sender: "bot",
        });
      }, 1000);
    });
  };

  const handleUserMessage = async (text) => {
    const newMessage = { id: Date.now(), text, sender: "user" };
    setMessages([...messages, newMessage]);

    const botResponse = await getBotResponse(text);
    setMessages((prevMessages) => [
      ...prevMessages,
      { ...botResponse, id: Date.now() },
    ]);
  };

  return (
    <div className="flex flex-col h-screen w-[70%] mx-auto shadow-lg rounded-lg border border-gray-200 bg-white">
      {/* <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center">
        <span className="text-lg font-semibold">Tree Care Assistant</span>
      </div> */}
      <TopBar />
      <div className="flex-1 overflow-y-auto space-y-4 bg-[#F8F5F0]">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <InputArea onSendMessage={handleUserMessage} />
    </div>
  );
}
