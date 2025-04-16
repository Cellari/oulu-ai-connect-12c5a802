
import React from 'react';
import { Bot } from 'lucide-react';

type MessageProps = {
  id: string;
  sender: 'user' | 'ai';
  content: React.ReactNode;
  timestamp: Date;
};

const ChatMessage = ({ sender, content }: MessageProps) => {
  return (
    <div
      className={`flex gap-3 ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {sender === "ai" && (
        <div className="w-8 h-8 rounded-full bg-oulu-primary flex-shrink-0 flex items-center justify-center text-white">
          <Bot size={16} />
        </div>
      )}
      <div
        className={`rounded-lg p-3 max-w-[85%] ${
          sender === "user"
            ? "bg-oulu-primary text-white"
            : "bg-white border border-gray-200 shadow-sm"
        }`}
      >
        {content}
      </div>
      {sender === "user" && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-white font-medium">
          U
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
