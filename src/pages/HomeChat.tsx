
import React, { useState, useRef, useEffect } from 'react';
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "@/components/chat/ChatMessage";
import EventsSection from "@/components/events/EventsSection";
import ReportsSection from "@/components/reports/ReportsSection";

type Message = {
  id: string;
  sender: 'user' | 'ai';
  content: React.ReactNode;
  timestamp: Date;
};

const HomeChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Initialize with welcome message and today's highlights
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          sender: 'ai',
          content: (
            <div>
              <h2 className="font-semibold mb-1">Welcome to Oulu!</h2>
              <p className="text-oulu-gray mb-2">Today is {formattedDate}</p>
              <p>I've found some exciting things happening in Oulu today!</p>
            </div>
          ),
          timestamp: new Date()
        },
        {
          id: '2',
          sender: 'ai',
          content: <EventsSection />,
          timestamp: new Date(Date.now() + 1000)
        },
        {
          id: '3',
          sender: 'ai',
          content: <ReportsSection />,
          timestamp: new Date(Date.now() + 2000)
        }
      ]);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        content: (
          <div>
            <p>I'm your Oulu assistant. I can help you find events, places, and services in Oulu.</p>
            <p className="mt-2">Is there anything specific you'd like to know about Oulu?</p>
          </div>
        ),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-oulu-dark">Oulu AI</h1>
        <div className="w-10 h-10 rounded-full bg-oulu-primary flex items-center justify-center text-white">
          <Bot size={20} />
        </div>
      </div>
      
      <ScrollArea className="flex-1 overflow-y-auto mb-4 pr-2">
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              id={message.id}
              sender={message.sender}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about places, events or services..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-oulu-secondary"
        />
        <Button type="submit" className="rounded-full px-5 bg-oulu-primary hover:bg-oulu-secondary">
          Send
        </Button>
      </form>
    </div>
  );
};

export default HomeChat;
