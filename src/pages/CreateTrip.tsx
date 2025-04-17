import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { AiAssistantBubble } from "@/components/ai-assistant-bubble";
import { CalendarIcon, ChevronLeft, MapPin, Plus, Users } from "lucide-react";
import { TripSuccess } from "@/components/trip-success";

const CreateTrip = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  
  const [tripTitle, setTripTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleCreateTrip = () => {
    // This would normally validate inputs and make an API call
    // For now, we'll just show the success screen
    setShowSuccess(true);
  };
  
  return (
    <div className="pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
            >
              <ChevronLeft />
            </Button>
            <h1 className="text-xl font-bold">Create Trip</h1>
          </div>
          <Button size="sm">Save Draft</Button>
        </div>
      </header>

      {/* Main Form */}
      <main className="p-4">
        <div className="space-y-6">
          {/* Trip Title */}
          <div className="space-y-2">
            <Label htmlFor="trip-title">Trip Title</Label>
            <Input 
              id="trip-title" 
              placeholder="My Amazing Vacation"
              value={tripTitle}
              onChange={(e) => setTripTitle(e.target.value)}
            />
          </div>
          
          {/* Destination */}
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                id="destination" 
                placeholder="Search for a city"
                className="pl-9"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>
          
          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    disabled={(date) => !date || (!!date && date < new Date())}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          {/* Trip Type */}
          <div className="space-y-2">
            <Label htmlFor="trip-type">Trip Type</Label>
            <Select value={tripType} onValueChange={setTripType}>
              <SelectTrigger id="trip-type">
                <SelectValue placeholder="Select trip type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beach">Beach Vacation</SelectItem>
                <SelectItem value="city">City Break</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="cultural">Cultural Experience</SelectItem>
                <SelectItem value="relaxation">Relaxation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range</Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger id="budget">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Budget ($)</SelectItem>
                <SelectItem value="moderate">Moderate ($$)</SelectItem>
                <SelectItem value="luxury">Luxury ($$$)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Companions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Travel Companions</Label>
              <Button size="sm" variant="outline" className="gap-1 text-xs">
                <Plus size={14} />
                Add Companion
              </Button>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-muted-foreground" />
                  <span className="text-sm">0 companions added</span>
                </div>
                <Button variant="link" size="sm" className="text-primary">
                  Find Companions
                </Button>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Trip Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your trip plans..."
              className="min-h-32"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          {/* Submit Button */}
          <Button 
            className="w-full bg-tripgenie-500 hover:bg-tripgenie-600 py-6 text-lg font-semibold"
            onClick={handleCreateTrip}
          >
            Create Trip
          </Button>
        </div>
      </main>

      {/* AI Assistant */}
      <AiAssistantBubble />
      
      {/* Bottom Navigation */}
      <BottomNav />

      {/* Success Screen */}
      {showSuccess && (
        <TripSuccess
          tripName={tripTitle || "Amazing Trip"}
          destination={destination || "Your Dream Destination"}
          startDate={date ? format(date, "MMM d, yyyy") : undefined}
          endDate={endDate ? format(endDate, "MMM d, yyyy") : undefined}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};

export default CreateTrip;
