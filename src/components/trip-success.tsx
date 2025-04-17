import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Share2 } from "lucide-react";

interface TripSuccessProps {
  tripName: string;
  destination: string;
  startDate?: string;
  endDate?: string;
  onClose: () => void;
}

export function TripSuccess({ 
  tripName, 
  destination, 
  startDate, 
  endDate,
  onClose 
}: TripSuccessProps) {
  const navigate = useNavigate();
  
  const handleViewTrip = () => {
    navigate("/trip/new"); // Navigate to the trip details page
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Trip Created!</h1>
        <p className="text-muted-foreground mb-6">
          Your trip to {destination} has been successfully created.
        </p>
        
        <div className="bg-muted rounded-lg p-4 w-full max-w-sm mb-8">
          <h2 className="font-semibold text-lg">{tripName}</h2>
          <p className="text-sm text-muted-foreground">{destination}</p>
          {startDate && endDate && (
            <p className="text-sm mt-1">
              {startDate} - {endDate}
            </p>
          )}
        </div>
        
        <div className="space-y-3 w-full max-w-sm">
          <Button 
            className="w-full bg-tripgenie-500 hover:bg-tripgenie-600"
            onClick={handleViewTrip}
          >
            View Trip Details
            <ArrowRight size={16} className="ml-2" />
          </Button>
          
          <Button variant="outline" className="w-full">
            Share with Friends
            <Share2 size={16} className="ml-2" />
          </Button>
        </div>
      </div>
      
      <div className="p-6 border-t">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="w-full"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}