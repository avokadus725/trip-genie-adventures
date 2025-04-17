import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Sparkles, Loader2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isAi: boolean;
  timestamp: Date;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export function AIChatModal({ isOpen, onClose, initialQuery }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Initialize with a welcome message
      if (messages.length === 0) {
        setMessages([
          {
            id: "welcome",
            content: "Hi! I'm TripGenie. How can I help with your travel plans today?",
            isAi: true,
            timestamp: new Date()
          }
        ]);
      }
      
      // If there's an initial query, simulate asking it
      if (initialQuery && messages.length <= 1) {
        handleInitialQuery(initialQuery);
      }
    }
  }, [isOpen, initialQuery]);
  
  useEffect(() => {
    // Scroll to bottom when messages update
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  const handleInitialQuery = (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      content: query,
      isAi: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI thinking
    setIsLoading(true);
    
    setTimeout(() => {
      const activitySuggestions: Message = {
        id: Date.now().toString() + "-ai",
        content: `Based on your location in Tokyo, here are some nearby activities I recommend:\n\n1. 🏮 Senso-ji Temple (15 min walk)\n2. 🍣 Tsukiji Outer Market Food Tour (30 min by train)\n3. 🌸 Shinjuku Gyoen National Garden (20 min by train)\n4. 🗼 Tokyo Skytree (10 min by taxi)\n5. 🎭 Kabuki performance at Kabukiza Theatre (25 min by train)\n\nWould you like more details about any of these?`,
        isAi: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, activitySuggestions]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      content: input,
      isAi: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate AI thinking
    setIsLoading(true);
    
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now().toString() + "-ai",
        content: `Thanks for your message! I'm a demo AI assistant, so I'm providing a simulated response. In a real implementation, I'd analyze your message "${input}" and provide helpful travel information.`,
        isAi: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-end sm:items-center">
      <div className="bg-white rounded-t-lg sm:rounded-lg w-full max-w-md sm:max-h-[80vh] max-h-[95vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-tripgenie-500 to-tripgenie-600 w-8 h-8 rounded-full flex items-center justify-center">
              <Sparkles size={18} className="text-white" />
            </div>
            <h3 className="font-semibold">TripGenie Assistant</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`flex ${message.isAi ? 'justify-start' : 'justify-end'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isAi 
                    ? 'bg-muted border border-border' 
                    : 'bg-tripgenie-500 text-white'
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-muted border border-border">
                <div className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  <span>TripGenie is thinking...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>
        
        <div className="p-4 border-t">
          <form 
            className="flex gap-2" 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button type="submit" disabled={!input.trim() || isLoading}>
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
