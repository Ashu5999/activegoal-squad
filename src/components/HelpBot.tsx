
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, X, Send, Bot } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const HelpBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "👋 Hi! I'm your fitness assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleBot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast.info("Help Assistant is here for you!");
    }
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      let response = "";
      
      if (inputValue.toLowerCase().includes("workout")) {
        response = "I can help you find the perfect workout routine! Go to the 'Goals' section to set up your fitness preferences.";
      } else if (inputValue.toLowerCase().includes("buddy") || inputValue.toLowerCase().includes("friend")) {
        response = "Looking for workout buddies? Check out the 'Buddy Match' section to find like-minded fitness partners!";
      } else if (inputValue.toLowerCase().includes("profile")) {
        response = "You can update your profile information in the 'Settings' section.";
      } else {
        response = "I'm here to help with your fitness journey! You can ask about workouts, finding buddies, or setting goals.";
      }
      
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
    
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-80 sm:w-96 mb-4 shadow-xl border border-purple-200 dark:border-purple-900 overflow-hidden">
          <div className="purple-gradient p-3 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Bot size={20} />
              <h3 className="font-bold">Fitness Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-purple-500/20"
              onClick={toggleBot}
            >
              <X size={18} />
            </Button>
          </div>
          
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg",
                    msg.isBot 
                      ? "bg-purple-100 dark:bg-purple-900/50 text-gray-800 dark:text-gray-200 self-start rounded-bl-none" 
                      : "bg-fitness-primary text-white self-end rounded-br-none"
                  )}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask for help..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fitness-primary"
              />
              <Button 
                className="bg-fitness-primary hover:bg-fitness-primary/90"
                size="icon"
                onClick={sendMessage}
              >
                <Send size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button 
        onClick={toggleBot}
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg purple-gradient text-white",
          !isOpen && "animate-bounce"
        )}
      >
        <HelpCircle size={24} />
      </Button>
    </div>
  );
};

export default HelpBot;
