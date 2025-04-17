
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MatchCard } from "@/components/match-card";
import { AiAssistantBubble } from "@/components/ai-assistant-bubble";
import { ChevronLeft, Filter, RefreshCcw, Settings, Sliders, SlidersHorizontal } from "lucide-react";

const MatchFinder = () => {
  const navigate = useNavigate();
  const [ageRange, setAgeRange] = useState([18, 65]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock data
  const potentialMatches = [
    {
      id: "1",
      name: "Sophie",
      age: 28,
      image: "https://i.pravatar.cc/150?img=29",
      compatibility: 91,
      interests: ["Hiking", "Photography", "Food"],
      tripCount: 7,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Richard",
      age: 34,
      image: "https://i.pravatar.cc/150?img=12",
      compatibility: 87,
      interests: ["Adventure", "History", "Local Culture"],
      tripCount: 12,
      rating: 4.7,
    },
    {
      id: "3",
      name: "Mia",
      age: 26,
      image: "https://i.pravatar.cc/150?img=25",
      compatibility: 85,
      interests: ["Beach", "Nature", "Relaxation"],
      tripCount: 5,
      rating: 4.9,
    },
    {
      id: "4",
      name: "Daniel",
      age: 31,
      image: "https://i.pravatar.cc/150?img=15",
      compatibility: 83,
      interests: ["City Exploration", "Museums", "Nightlife"],
      tripCount: 9,
      rating: 4.6,
    }
  ];

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
            <h1 className="text-xl font-bold">Travel Companions</h1>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={18} />
            </Button>
            <Button size="icon" variant="ghost">
              <RefreshCcw size={18} />
            </Button>
          </div>
        </div>
      </header>

      {/* Filters Panel */}
      {showFilters && (
        <div className="border-b bg-background p-4">
          <h2 className="mb-4 text-sm font-medium">Refine Your Search</h2>
          
          <div className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between">
                <Label>Age Range</Label>
                <span className="text-sm text-muted-foreground">
                  {ageRange[0]} - {ageRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={ageRange}
                min={18}
                max={80}
                step={1}
                onValueChange={(value) => setAgeRange(value)}
                className="py-4"
              />
            </div>
            
            <div>
              <Label htmlFor="trip-type" className="mb-2">Trip Type Interest</Label>
              <Select>
                <SelectTrigger id="trip-type">
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beach">Beach Vacation</SelectItem>
                  <SelectItem value="cultural">Cultural Experience</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="nightlife">Nightlife</SelectItem>
                  <SelectItem value="relaxation">Relaxation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="language" className="mb-2">Preferred Language</Label>
              <Select>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Any language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline">Reset</Button>
              <Button>Apply Filters</Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-medium">Best Matches for You</h2>
          <Button variant="ghost" size="sm" className="gap-1 text-xs">
            <Settings size={14} />
            Matching Preferences
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {potentialMatches.map((match) => (
            <MatchCard
              key={match.id}
              {...match}
              onClick={() => console.log("View profile", match.id)}
            />
          ))}
        </div>
      </main>

      {/* AI Assistant */}
      <AiAssistantBubble />
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default MatchFinder;
