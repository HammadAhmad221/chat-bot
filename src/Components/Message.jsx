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

export default function Message({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={`flex space-x-3 p-4 ${isBot ? "items-start justify-start":"items-end justify-end"}`}
    >
      {/* Avatar */}
      {isBot && <img
        src="/Frame.jpg"
        alt={`${message.sender} Avatar`}
        className="w-8 h-8 rounded-full"
        />
      }

      {/* Message Content */}
      <div>
        <div className={`rounded-sm text-md bg-gray-100 p-2 flex ${isBot ? "rounded-tr-2xl items-start":"items-end rounded-bl-2xl"}`}>
          {message.text}
        </div>

        {/* Action Icons */}
        {/* <div className="mt-2 flex items-center space-x-2">
          {isBot ? (
            <>
              <img src="/like.svg" alt="" />
              <img src="/dislike.svg" alt="" />
            </>
          ) : (
            <img src="/medit.svg" alt="" />
          )}
        </div> */}
      </div>
    </div>
  );
}
