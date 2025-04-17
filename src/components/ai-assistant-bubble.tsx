import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { AIChatModal } from "./ai-chat-modal";

interface AiAssistantBubbleProps {
  onAskGenie?: () => void;
}

export function AiAssistantBubble({ onAskGenie }: AiAssistantBubbleProps) {
  const [expanded, setExpanded] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<string | undefined>(undefined);
  
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  
  const handleAskGenie = (query?: string) => {
    if (onAskGenie) {
      onAskGenie();
    }
    setSelectedQuery(query);
    setShowChatModal(true);
    setExpanded(false);
  };

  return (
    <>
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
                onClick={() => handleAskGenie("Suggest activities nearby")}
              >
                Suggest activities nearby
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left text-sm"
                onClick={() => handleAskGenie("Find a travel companion")}
              >
                Find a travel companion
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left text-sm"
                onClick={() => handleAskGenie("Plan my next trip")}
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

      <AIChatModal 
        isOpen={showChatModal} 
        onClose={() => setShowChatModal(false)}
        initialQuery={selectedQuery}
      />
    </>
  );
}
