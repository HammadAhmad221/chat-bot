// import React, { useState, useRef, useEffect } from "react";
// import Message from "./Message";
// import InputArea from "./InputArea";
// // import TopBar from "./Topbar";

// export default function ChatBot() {
//   const [messages, setMessages] = useState([
//     // { id: 1, text: "How can I tell if my tree is diseased?", sender: "user" },
//     // {
//     //   id: 2,
//     //   text: "Look for signs like discolored leaves, unusual growths on the trunk, wilting, or dead branches. Upload a photo, and I can help identify the issue.",
//     //   sender: "bot",
//     // },
//   ]);
//   const messagesEndRef = useRef(null);
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);
//   const getBotResponse = (userMessage) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           text: "This is a sample response from the bot.",
//           sender: "bot",
//         });
//       }, 1000);
//     });
//   };

//   const handleUserMessage = async (text) => {
//     const newMessage = { id: Date.now(), text, sender: "user" };
//     setMessages([...messages, newMessage]);

//     const botResponse = await getBotResponse(text);
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { ...botResponse, id: Date.now() },
//     ]);
//   };

//   return (
//     <div className={`flex flex-col w-[80%] mx-auto shadow-lg rounded-lg border border-gray-200 bg-white`}>
//       <div className="bg-[#0B3D2C] text-white p-4 rounded-t-lg flex items-center justify-between">
//         <div className="text-lg font-semibold capitalize">how can i help you?</div>
//         <button className="text-md text-white font-semibold"
//         onClick={()=>setMessages([])}
//         >
//           New Chat&nbsp;+
//         </button>
//       </div>
//       {/* <TopBar /> */}

//       <div className="flex-1 max-h-[500px] overflow-y-auto space-y-4">
//         {messages.map((message) => (
//           <Message key={message.id} message={message} />
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <InputArea onSendMessage={handleUserMessage} />
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import InputArea from "./InputArea";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      // Scroll to the bottom when messages change
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
    <div className="flex flex-col w-[80%] mx-auto shadow-lg rounded-lg border border-gray-200 bg-white">
      <div className="bg-[#0B3D2C] text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="text-lg font-semibold capitalize">how can i help you?</div>
        <button
          className="text-md text-white font-semibold"
          onClick={() => setMessages([])}
        >
          New Chat&nbsp;+
        </button>
      </div>

      {/* Messages Section */}
      <div className="flex-1 max-h-[400px] overflow-y-auto p-4 space-y-4"
      ref={messagesContainerRef}
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {/* <div ref={messagesEndRef} /> */}
      </div>

      <InputArea onSendMessage={handleUserMessage} />
    </div>
  );
}
