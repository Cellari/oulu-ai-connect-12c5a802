import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { 
  Calendar, 
  AlertCircle, 
  Navigation,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          content: eventsMessage(),
          timestamp: new Date(Date.now() + 1000)
        },
        {
          id: '3',
          sender: 'ai',
          content: reportsMessage(),
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

  const openInMaps = (location: string) => {
    const url = `https://maps.google.com/maps?q=${location}`;
    window.open(url, '_blank');
  };

  function quickAccessMessage() {
    return (
      <div>
        <h2 className="font-semibold mb-2">Quick Access</h2>
        <div className="grid grid-cols-3 gap-4 mb-2">
          <Link to="/explore" className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
              <MapPin size={20} />
            </div>
            <span className="text-xs text-center">Explore</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-1">
              <Calendar size={20} />
            </div>
            <span className="text-xs text-center">Events</span>
          </Link>
          <Link to="/feedback" className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-1">
              <AlertCircle size={20} />
            </div>
            <span className="text-xs text-center">Report</span>
          </Link>
        </div>
      </div>
    );
  }

  function eventsMessage() {
    return (
      <div>
        <Collapsible className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-oulu-dark">Events near you</h2>
            <CollapsibleTrigger className="text-oulu-secondary text-sm flex items-center">
              See all <ChevronDown size={16} className="ml-1" />
            </CollapsibleTrigger>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden mb-2">
            <div className="p-3">
              <div className="flex gap-3">
                <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
                  <span className="block text-xs">APR</span>
                  <span className="block text-lg font-bold">15</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Oulu Day Festival</h3>
                  <p className="text-xs text-oulu-gray">Market Square, 12:00 - 18:00</p>
                  <div className="flex justify-between items-center mt-1">
                    <div>
                      <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full">Family</span>
                      <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full ml-1">Outdoor</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 h-auto text-oulu-secondary"
                      onClick={() => openInMaps("65.013826,25.464782")}
                    >
                      <Navigation size={14} className="mr-1" />
                      <span className="text-xs">Map</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <CollapsibleContent>
            <div className="bg-white rounded-lg shadow overflow-hidden mb-2">
              <div className="p-3">
                <div className="flex gap-3">
                  <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
                    <span className="block text-xs">APR</span>
                    <span className="block text-lg font-bold">17</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Art Exhibition Opening</h3>
                    <p className="text-xs text-oulu-gray">Cultural Center, 17:00 - 20:00</p>
                    <div className="flex justify-between items-center mt-1">
                      <div>
                        <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full">Arts</span>
                        <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full ml-1">Indoor</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-0 h-auto text-oulu-secondary"
                        onClick={() => openInMaps("65.012052,25.470384")}
                      >
                        <Navigation size={14} className="mr-1" />
                        <span className="text-xs">Map</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-3">
                <div className="flex gap-3">
                  <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
                    <span className="block text-xs">APR</span>
                    <span className="block text-lg font-bold">18</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Local Food Festival</h3>
                    <p className="text-xs text-oulu-gray">Rotuaari, 10:00 - 16:00</p>
                    <div className="flex justify-between items-center mt-1">
                      <div>
                        <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full">Food</span>
                        <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full ml-1">Outdoor</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-0 h-auto text-oulu-secondary"
                        onClick={() => openInMaps("65.011932,25.471068")}
                      >
                        <Navigation size={14} className="mr-1" />
                        <span className="text-xs">Map</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  }

  function reportsMessage() {
    return (
      <div>
        <Collapsible className="w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-oulu-dark">Recent Reports</h2>
            <CollapsibleTrigger className="text-oulu-secondary text-sm flex items-center">
              See all <ChevronDown size={16} className="ml-1" />
            </CollapsibleTrigger>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden mb-2">
            <div className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Pothole on Torikatu</h3>
                  <p className="text-xs text-oulu-gray">Reported April 10</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">In Progress</span>
              </div>
            </div>
          </div>
          
          <CollapsibleContent>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Broken Street Light</h3>
                    <p className="text-xs text-oulu-gray">Reported April 5</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Resolved</span>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  }

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
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "ai" && (
                <div className="w-8 h-8 rounded-full bg-oulu-primary flex-shrink-0 flex items-center justify-center text-white">
                  <Bot size={16} />
                </div>
              )}
              <div
                className={`rounded-lg p-3 max-w-[85%] ${
                  message.sender === "user"
                    ? "bg-oulu-primary text-white"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {message.content}
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-white font-medium">
                  U
                </div>
              )}
            </div>
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
