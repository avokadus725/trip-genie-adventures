
import { BottomNav } from "@/components/ui/bottom-nav";
import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiAssistantBubble } from "@/components/ai-assistant-bubble";
import { Filter, MapPin, Search, Star } from "lucide-react";

const Explore = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <Logo className="mb-4" />
        
        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Where to?" 
              className="pl-9"
            />
          </div>
          <Button size="icon" variant="outline">
            <Filter size={18} />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <Tabs defaultValue="destinations">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="companions">Companions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="destinations" className="mt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Paris",
                  country: "France",
                  image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                  rating: 4.8,
                  category: "City",
                },
                {
                  name: "Bali",
                  country: "Indonesia",
                  image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47",
                  rating: 4.7,
                  category: "Beach",
                },
                {
                  name: "Swiss Alps",
                  country: "Switzerland",
                  image: "https://images.unsplash.com/photo-1527489377706-5bf97e608852",
                  rating: 4.9,
                  category: "Mountain",
                },
                {
                  name: "Tokyo",
                  country: "Japan",
                  image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
                  rating: 4.6,
                  category: "City",
                },
              ].map((destination, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-48">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-medium shadow-sm">
                      {destination.category}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{destination.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="text-sm">{destination.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={12} />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="activities" className="mt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Island Hopping",
                  location: "Phi Phi Islands",
                  image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
                  rating: 4.8,
                  price: "$75",
                  duration: "6 hours",
                },
                {
                  name: "Wine Tasting",
                  location: "Tuscany, Italy",
                  image: "https://images.unsplash.com/photo-1566842377576-6dc0348dc04e",
                  rating: 4.9,
                  price: "$120",
                  duration: "4 hours",
                },
                {
                  name: "Scuba Diving",
                  location: "Great Barrier Reef",
                  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
                  rating: 4.7,
                  price: "$150",
                  duration: "3 hours",
                },
                {
                  name: "Northern Lights Tour",
                  location: "Reykjavik, Iceland",
                  image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
                  rating: 4.9,
                  price: "$95",
                  duration: "4 hours",
                },
              ].map((activity, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-40">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute right-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-medium text-primary shadow-sm">
                      {activity.price}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{activity.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="text-sm">{activity.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={12} />
                        <span>{activity.location}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {activity.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="companions" className="mt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* This would be populated with MatchCard components */}
              <div className="rounded-lg border p-4 text-center">
                <p>Find your perfect travel companion</p>
                <Button className="mt-3 bg-tripgenie-500 hover:bg-tripgenie-600">Match Now</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* AI Assistant */}
      <AiAssistantBubble />
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Explore;
