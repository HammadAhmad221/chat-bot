// import React from 'react';

// export default function Message({ message }) {
//   const isBot = message.sender === 'bot';
//   const avatarSrc = isBot ? '/Frame.jpg' : '/userProfile.jpg';

//   return (
//     <div className={ `flex items-start space-x-3 p-4 ${
//           isBot ? 'bg-white' : ''
//         }`}>
//       <img
//         src={avatarSrc}
//         alt={`${message.sender} Avatar`}
//         className="w-8 h-8 rounded-full"
//       />
//       <div
//         className="rounded-lg text-[#0B3D2C] font-semibold text-lg"
//       >
//         {message.text}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaThumbsUp, FaThumbsDown, FaEdit } from "react-icons/fa";

export default function Message({ message }) {
  const isBot = message.sender === "bot";
  const avatarSrc = isBot ? "/Frame.jpg" : "/userProfile.jpg";

  return (
    <div
      className={`flex items-start space-x-3 p-4 ${isBot ? "bg-white" : ""}`}
    >
      {/* Avatar */}
      <img
        src={avatarSrc}
        alt={`${message.sender} Avatar`}
        className="w-8 h-8 rounded-full"
      />

      {/* Message Content */}
      <div>
        <div className="rounded-lg text-[#0B3D2C] font-semibold text-lg">
          {message.text}
        </div>

        {/* Action Icons */}
        <div className="mt-2 flex items-center space-x-2">
          {isBot ? (
            // Like and Dislike icons for bot messages
            <>
              {/* <FaThumbsUp className=" cursor-pointer hover:text-green-500" /> */}

              <img src="/like.svg" alt="" />
              {/* <FaThumbsDown className="text-gray-500 cursor-pointer hover:text-red-500" /> */}
              <img src="/dislike.svg" alt="" />
            </>
          ) : (
            // Edit icon for user messages
            // <FaEdit className="text-gray-500 cursor-pointer hover:text-blue-500" />
            <img src="/medit.svg" alt="" />
          )}
        </div>
      </div>
    </div>
  );
}
