
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { BottomNav } from "@/components/ui/bottom-nav";
import { TripCard } from "@/components/trip-card";
import { AiAssistantBubble } from "@/components/ai-assistant-bubble";
import { 
  CircleUser, 
  Search, 
  Sparkles, 
  TrendingUp,
  Heart
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "suggested" | "saved">("upcoming");
  
  // Mock data
  const upcomingTrips = [
    {
      id: "1",
      title: "Tokyo Adventure",
      destination: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      startDate: "May 15, 2024",
      endDate: "May 25, 2024",
      companions: 2,
    },
    {
      id: "2",
      title: "Beach Paradise",
      destination: "Bali, Indonesia",
      image: "https://hayatestate.com/wp-content/uploads/2024/03/playa-y-acantilados-en-bali-indonesia-1.jpg",
      startDate: "Aug 10, 2024",
      endDate: "Aug 20, 2024",
      companions: 0,
    },
  ];
  
  const suggestedTrips = [
    {
      id: "3",
      title: "Mountain Retreat",
      destination: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1527489377706-5bf97e608852",
      startDate: "Sep 5, 2024",
      endDate: "Sep 12, 2024",
    },
    {
      id: "4",
      title: "Foodie Tour",
      destination: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
      startDate: "Oct 3, 2024",
      endDate: "Oct 10, 2024",
    },
  ];
  
  const savedTrips = [
    {
      id: "5",
      title: "Safari Adventure",
      destination: "Serengeti, Tanzania",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53",
      startDate: "Nov 15, 2024",
      endDate: "Nov 25, 2024",
    },
  ];

  // Handle AI Assistant
  const handleAskGenie = () => {
    console.log("Opening AI Assistant");
    // This would typically open a modal or navigate to the AI chat interface
  };
  
  return (
    <div className="pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <Search size={20} />
            </Button>
            <Button size="icon" variant="ghost">
              <CircleUser size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="p-4">
        <h1 className="text-2xl font-bold">Welcome back, Lily!</h1>
        <p className="text-muted-foreground">Ready for your next adventure?</p>
      </section>

      {/* Trip Categories */}
      <section className="px-4">
        <div className="mb-4 flex border-b">
          <button
            className={`flex-1 border-b-2 pb-2 pt-1 font-medium ${
              activeTab === "upcoming"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`flex-1 border-b-2 pb-2 pt-1 font-medium ${
              activeTab === "suggested"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground"
            }`}
            onClick={() => setActiveTab("suggested")}
          >
            Suggested
          </button>
          <button
            className={`flex-1 border-b-2 pb-2 pt-1 font-medium ${
              activeTab === "saved"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground"
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
        </div>

        {/* Trip Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {activeTab === "upcoming" &&
            upcomingTrips.map((trip) => (
              <TripCard
                key={trip.id}
                {...trip}
                onClick={() => console.log("Navigate to trip details", trip.id)}
              />
            ))}
            
          {activeTab === "suggested" &&
            suggestedTrips.map((trip) => (
              <TripCard
                key={trip.id}
                {...trip}
                onClick={() => console.log("Navigate to trip details", trip.id)}
              />
            ))}
            
          {activeTab === "saved" &&
            savedTrips.map((trip) => (
              <TripCard
                key={trip.id}
                {...trip}
                onClick={() => console.log("Navigate to trip details", trip.id)}
              />
            ))}
            
          {activeTab === "upcoming" && upcomingTrips.length === 0 && (
            <p className="col-span-full py-8 text-center text-muted-foreground">
              No upcoming trips. Start planning your next adventure!
            </p>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="mt-8 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Trending Destinations</h2>
          <Button variant="ghost" size="sm" className="gap-1 text-xs">
            <TrendingUp size={14} />
            View all
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <div className="flex w-max gap-3 pb-2">
            {[
              {
                name: "Kyoto",
                country: "Japan",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
              },
              {
                name: "Barcelona",
                country: "Spain",
                image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
              },
              {
                name: "Santorini",
                country: "Greece",
                image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
              },
              {
                name: "New York",
                country: "USA",
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
              },
            ].map((destination, idx) => (
              <div key={idx} className="relative w-40 flex-shrink-0">
                <div className="h-48 overflow-hidden rounded-lg">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <h3 className="font-semibold">{destination.name}</h3>
                  <p className="text-xs">{destination.country}</p>
                </div>
                <button className="absolute right-2 top-2 rounded-full bg-white/20 p-1.5 backdrop-blur-sm">
                  <Heart size={16} className="text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Bubble */}
      <AiAssistantBubble onAskGenie={handleAskGenie} />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
