
import { BottomNav } from "@/components/ui/bottom-nav";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TripCard } from "@/components/trip-card";
import { Badge } from "@/components/ui/badge";
import { AiAssistantBubble } from "@/components/ai-assistant-bubble";
import { 
  Calendar, 
  Edit3, 
  Globe, 
  MapPin, 
  Settings, 
  Star, 
  User, 
  Users 
} from "lucide-react";

const Profile = () => {
  // Mock data
  const userProfile = {
    name: "Lily Bloom",
    location: "Kharkiv, Ukraine",
    bio: "Adventure seeker and photography enthusiast. Always looking for new experiences and places to explore.",
    joinedDate: "March 2025",
    trips: 12,
    companions: 8,
    rating: 4.8,
    interests: ["Adventure", "Photography", "Hiking", "Food", "Culture"],
    countries: 15,
    image: "https://media.istockphoto.com/id/956864266/es/foto/viajero-mochilero-de-mujer-feliz-fotografiar-selfie-en-la-impresionante-costa-del-oc%C3%A9ano.jpg?s=612x612&w=0&k=20&c=ozvyLH6hReotjg7MHiqIoW_ZF1TSdir5hbjZgTKslIA=",
  };
  
  const pastTrips = [
    {
      id: "1",
      title: "Exploring Thailand",
      destination: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c8dd861",
      startDate: "Jan 5, 2024",
      endDate: "Jan 15, 2024",
      companions: 2,
    },
    {
      id: "2",
      title: "NYC Weekend",
      destination: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      startDate: "Nov 20, 2023",
      endDate: "Nov 23, 2023",
      companions: 1,
    },
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="relative h-48 bg-gradient-to-r from-tripgenie-400 to-tripgenie-700">
        <div className="absolute right-4 top-4 flex gap-2">
          <Button size="icon" variant="ghost" className="text-white">
            <Edit3 size={20} />
          </Button>
          <Button size="icon" variant="ghost" className="text-white">
            <Settings size={20} />
          </Button>
        </div>
      </header>

      {/* Profile Info */}
      <div className="px-4">
        <div className="relative -mt-16 flex flex-col items-center">
          <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
            <img
              src={userProfile.image}
              alt={userProfile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mt-3 text-2xl font-bold">{userProfile.name}</h1>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin size={14} />
            <span>{userProfile.location}</span>
          </div>

          <div className="mt-4 flex w-full justify-around rounded-lg bg-muted p-4">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">{userProfile.trips}</span>
              <span className="text-xs text-muted-foreground">Trips</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">{userProfile.companions}</span>
              <span className="text-xs text-muted-foreground">Companions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold">{userProfile.countries}</span>
              <span className="text-xs text-muted-foreground">Countries</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">{userProfile.rating}</span>
                <Star size={16} className="mb-1 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-xs text-muted-foreground">Rating</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">{userProfile.bio}</p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {userProfile.interests.map((interest) => (
              <Badge key={interest} variant="secondary" className="bg-accent">
                {interest}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex w-full items-center justify-around border-y py-3">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-muted-foreground" />
              <span className="text-sm">Joined {userProfile.joinedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-muted-foreground" />
              <span className="text-sm">{userProfile.countries} countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 px-4">
        <Tabs defaultValue="trips">
          <TabsList className="w-full">
            <TabsTrigger value="trips" className="flex-1">
              <Calendar className="mr-1 h-4 w-4" />
              Trips
            </TabsTrigger>
            <TabsTrigger value="companions" className="flex-1">
              <Users className="mr-1 h-4 w-4" />
              Companions
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex-1">
              <Calendar className="mr-1 h-4 w-4" />
              Photos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trips" className="mt-4">
            <h3 className="mb-4 font-medium">Past Trips</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pastTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  {...trip}
                  onClick={() => console.log("Navigate to trip", trip.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="companions">
            <div className="mt-8 text-center text-muted-foreground">
              <User className="mx-auto h-12 w-12 opacity-20" />
              <p className="mt-2">No travel companions yet</p>
              <Button variant="outline" className="mt-4">
                Find Companions
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <div className="mt-8 text-center text-muted-foreground">
              <User className="mx-auto h-12 w-12 opacity-20" />
              <p className="mt-2">No photos uploaded yet</p>
              <Button variant="outline" className="mt-4">
                Upload Photos
              </Button>
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

export default Profile;
