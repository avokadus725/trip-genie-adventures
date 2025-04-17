
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Flame, Users, Star } from "lucide-react";

interface MatchCardProps {
  name: string;
  age: number;
  image: string;
  compatibility: number;
  interests: string[];
  tripCount: number;
  rating: number;
  onClick?: () => void;
}

export function MatchCard({
  name,
  age,
  image,
  compatibility,
  interests,
  tripCount,
  rating,
  onClick,
}: MatchCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-64 w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-3 right-3 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
          <div className="flex items-center gap-1">
            <Flame size={14} />
            <span>{compatibility}% Match</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{name}, {age}</h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Users size={16} />
          <span>{tripCount} {tripCount === 1 ? "trip" : "trips"} completed</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge key={interest} variant="secondary" className="bg-accent">
              {interest}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onClick}
          className="w-full bg-tripgenie-500 hover:bg-tripgenie-600"
        >
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
