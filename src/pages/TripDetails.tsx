
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AiAssistantBubble } from "@/components/ai-assistant-bubble";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BottomNav } from "@/components/ui/bottom-nav";
import { 
  Calendar,
  ChevronLeft,
  Clock,
  Hotel,
  MapPin,
  MoreHorizontal,
  Plane,
  Plus,
  Share2,
  Utensils,
  Users
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TripDetails = () => {
  const navigate = useNavigate();
  
  // Mock data
  const trip = {
    id: "1",
    title: "Tokyo Adventure",
    description: "Exploring the vibrant streets of Tokyo, experiencing traditional and modern Japanese culture.",
    destination: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    startDate: "May 15, 2024",
    endDate: "May 25, 2024",
    companions: [
      {
        id: "1",
        name: "Emma Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: "2",
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    days: [
      {
        date: "May 15, 2024",
        title: "Arrival Day",
        activities: [
          {
            time: "14:00",
            title: "Check-in at Hotel Gracery Shinjuku",
            type: "accommodation",
            address: "1-19-1 Kabukicho, Shinjuku-ku, Tokyo",
            icon: "Hotel",
          },
          {
            time: "18:00",
            title: "Dinner at Robot Restaurant",
            type: "food",
            address: "Shinjuku Robot Building, 1-7-1 Kabukicho",
            icon: "Utensils",
          },
        ],
      },
      {
        date: "May 16, 2024",
        title: "Central Tokyo Exploration",
        activities: [
          {
            time: "09:00",
            title: "Visit Meiji Shrine",
            type: "attraction",
            address: "1-1 Yoyogi-Kamizonocho, Shibuya City",
            icon: "Landmark",
          },
          {
            time: "12:30",
            title: "Lunch at Ichiran Ramen",
            type: "food",
            address: "1 Chome-22-7 Jinnan, Shibuya City",
            icon: "Utensils",
          },
          {
            time: "14:00",
            title: "Shopping in Harajuku",
            type: "activity",
            address: "Takeshita Street, Harajuku",
            icon: "ShoppingBag",
          },
          {
            time: "19:00",
            title: "Dinner at Gonpachi Nishi-Azabu",
            type: "food",
            address: "1 Chome-13-11 Nishiazabu, Minato City",
            icon: "Utensils",
          },
        ],
      },
      {
        date: "May 17, 2024",
        title: "Traditional Tokyo",
        activities: [
          {
            time: "09:30",
            title: "Senso-ji Temple Visit",
            type: "attraction",
            address: "2 Chome-3-1 Asakusa, Taito City",
            icon: "Landmark",
          },
          {
            time: "12:00",
            title: "Lunch at Asakusa Okonomiyaki",
            type: "food",
            address: "1 Chome-18-7 Asakusa, Taito City",
            icon: "Utensils",
          },
        ],
      },
    ],
  };
  
  const [activeDay, setActiveDay] = useState(0);

  // Icon mapping for activity types
  const iconMap: Record<string, any> = {
    accommodation: Hotel,
    food: Utensils,
    transport: Plane,
    attraction: MapPin,
    activity: Clock,
  };

  return (
    <div className="pb-20">
      {/* Trip Cover Image */}
      <div className="relative h-64 w-full">
        <img
          src={trip.image}
          alt={trip.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h1 className="text-2xl font-bold">{trip.title}</h1>
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={14} />
            <span>{trip.destination}</span>
          </div>
          <div className="mt-2 flex items-center gap-1 text-sm">
            <Calendar size={14} />
            <span>
              {trip.startDate} - {trip.endDate}
            </span>
          </div>
        </div>
        
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-white"
          >
            <ChevronLeft />
          </Button>
        </div>
        
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <Button size="icon" variant="ghost" className="text-white">
            <Share2 size={18} />
          </Button>
          <Button size="icon" variant="ghost" className="text-white">
            <MoreHorizontal size={18} />
          </Button>
        </div>
      </div>

      {/* Trip Info */}
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-muted p-3">
          <div className="flex items-center gap-3">
            <Users size={20} className="text-primary" />
            <div>
              <span className="text-sm font-medium">Travel Companions</span>
              <div className="flex -space-x-2">
                {trip.companions.map((companion) => (
                  <Avatar key={companion.id} className="h-6 w-6 border-2 border-background">
                    <AvatarImage src={companion.avatar} />
                    <AvatarFallback>{companion.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
                <Button
                  size="icon"
                  variant="outline"
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                >
                  <Plus size={12} />
                </Button>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Chat
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">{trip.description}</p>
      </div>

      {/* Itinerary */}
      <div className="mt-2">
        <Tabs defaultValue="itinerary">
          <div className="border-b px-4">
            <TabsList className="w-full">
              <TabsTrigger value="itinerary" className="flex-1">Itinerary</TabsTrigger>
              <TabsTrigger value="map" className="flex-1">Map</TabsTrigger>
              <TabsTrigger value="info" className="flex-1">Info</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="itinerary" className="p-4">
            <div className="mb-4 flex overflow-x-auto py-2">
              {trip.days.map((day, index) => (
                <button
                  key={day.date}
                  className={`mr-2 flex min-w-32 flex-col items-center rounded-lg border p-2 ${
                    activeDay === index
                      ? "border-primary bg-primary/10"
                      : "border-muted bg-background"
                  }`}
                  onClick={() => setActiveDay(index)}
                >
                  <span className="text-xs text-muted-foreground">Day {index + 1}</span>
                  <span className={`text-sm font-medium ${activeDay === index ? "text-primary" : ""}`}>
                    {day.date.split(", ")[0]}
                  </span>
                </button>
              ))}
            </div>
            
            {trip.days[activeDay] && (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">{trip.days[activeDay].title}</h3>
                  <Button size="sm" variant="outline" className="gap-1 text-xs">
                    <Plus size={14} />
                    Add Activity
                  </Button>
                </div>
                
                <div className="relative ml-4">
                  {trip.days[activeDay].activities.map((activity, idx) => {
                    const ActivityIcon = iconMap[activity.type] || Clock;
                    
                    return (
                      <div key={idx} className="mb-6 pl-6">
                        <div className="absolute left-0 h-full w-px bg-muted" />
                        <div className="absolute left-[-4px] flex h-8 w-8 items-center justify-center rounded-full bg-white border">
                          <ActivityIcon size={16} className="text-primary" />
                        </div>
                        
                        <div className="rounded-lg border p-3">
                          <div className="mb-1 text-sm font-medium">{activity.title}</div>
                          <div className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock size={12} />
                            <span>{activity.time}</span>
                          </div>
                          {activity.address && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin size={12} />
                              <span>{activity.address}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="map">
            <div className="flex h-80 items-center justify-center bg-muted/30 text-center">
              <div>
                <p className="text-muted-foreground">Map view will be available soon</p>
                <Button className="mt-2">Open in Maps</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="info">
            <div className="p-4 space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Trip Notes</h3>
                <p className="text-sm text-muted-foreground">
                  Remember to exchange currency at the airport and buy a Suica card for public transportation. The hotel offers free pocket WiFi devices for guests.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 font-semibold">Weather Forecast</h3>
                <div className="rounded-lg border p-3 text-sm">
                  Weather information will be available closer to departure date.
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* AI Assistant */}
      <AiAssistantBubble />
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default TripDetails;
