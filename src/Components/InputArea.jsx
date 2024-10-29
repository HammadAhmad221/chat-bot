import React, { useState } from 'react';

export default function InputArea({ onSendMessage }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
<div className='bg-gray-200 flex items-center p-2 gap-4 rounded-md'>
    <img src="/image.svg" alt="" />
<input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your question here..."
        className="flex-1 p-2 focus:outline-none focus:ring-none bg-gray-200"
      />
      <img src="/send.svg" alt="" />
</div>
    </form>
  );
}
