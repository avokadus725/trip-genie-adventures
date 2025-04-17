
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface AiAssistantBubbleProps {
  onAskGenie?: () => void;
}

export function AiAssistantBubble({ onAskGenie }: AiAssistantBubbleProps) {
  const [expanded, setExpanded] = useState(false);
  
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  
  const handleAskGenie = () => {
    if (onAskGenie) {
      onAskGenie();
    }
    setExpanded(false);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {expanded && (
        <div className="mb-3 w-64 rounded-2xl bg-white p-4 shadow-lg transition-all duration-300">
          <div className="mb-3 text-sm font-medium">
            How can TripGenie help you today?
          </div>
          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start text-left text-sm"
              onClick={handleAskGenie}
            >
              Suggest activities nearby
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left text-sm"
              onClick={handleAskGenie}
            >
              Find a travel companion
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start text-left text-sm"
              onClick={handleAskGenie}
            >
              Plan my next trip
            </Button>
          </div>
        </div>
      )}
      
      <Button
        onClick={handleToggle}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-tripgenie-500 to-tripgenie-600 shadow-lg"
      >
        <Sparkles size={24} className="text-white" />
      </Button>
    </div>
  );
}
