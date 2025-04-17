import { useState } from "react";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiAssistantBubble } from "@/components/ai-assistant-bubble";
import { Filter, MapPin, Search, Star, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Explore = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Destination types for filtering
  const destinationTypes = ["City", "Beach", "Mountain", "Cultural", "Adventure", "Relaxation"];
  
  // Mock data for destinations
  const destinations = [
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
    {
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      rating: 4.8,
      category: "Beach",
    },
    {
      name: "Machu Picchu",
      country: "Peru",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      rating: 4.9,
      category: "Cultural",
    },
  ];

  // Toggle filter selection
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters([]);
  };

  // Filter destinations based on selected filters
  const filteredDestinations = activeFilters.length > 0
    ? destinations.filter(dest => activeFilters.includes(dest.category))
    : destinations;

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
          <Button 
            size="icon" 
            variant={showFilters ? "default" : "outline"}
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? "bg-tripgenie-500 hover:bg-tripgenie-600" : ""}
          >
            <Filter size={18} />
          </Button>
        </div>
        
        {/* Filters Section */}
        {showFilters && (
          <div className="mt-4 border-t pt-3 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Filter by Type</h3>
              {activeFilters.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 text-xs">
                  Clear all
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {destinationTypes.map(type => (
                <Badge 
                  key={type}
                  variant={activeFilters.includes(type) ? "default" : "outline"}
                  className={`cursor-pointer ${activeFilters.includes(type) ? 'bg-tripgenie-500 hover:bg-tripgenie-600' : ''}`}
                  onClick={() => toggleFilter(type)}
                >
                  {type}
                  {activeFilters.includes(type) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
            </div>
            
            {activeFilters.length > 0 && (
              <div className="mt-3 text-sm text-muted-foreground">
                Showing {filteredDestinations.length} {filteredDestinations.length === 1 ? 'result' : 'results'}
              </div>
            )}
          </div>
        )}
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
              {filteredDestinations.map((destination, idx) => (
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
              
              {filteredDestinations.length === 0 && (
                <div className="col-span-full py-8 text-center">
                  <p className="text-muted-foreground">No destinations match your filters</p>
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    className="mt-2"
                  >
                    Clear filters
                  </Button>
                </div>
              )}
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
