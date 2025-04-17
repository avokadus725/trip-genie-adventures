
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { CalendarIcon, MapPin, Users } from "lucide-react";

interface TripCardProps {
  title: string;
  destination: string;
  image: string;
  startDate: string;
  endDate: string;
  companions?: number;
  onClick?: () => void;
}

export function TripCard({
  title,
  destination,
  image,
  startDate,
  endDate,
  companions,
  onClick,
}: TripCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={destination}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={14} />
            <span>{destination}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon size={16} />
            <span>
              {startDate} - {endDate}
            </span>
          </div>
          {companions !== undefined && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} />
              <span>
                {companions} {companions === 1 ? "companion" : "companions"}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onClick}
          className="w-full bg-tripgenie-500 hover:bg-tripgenie-600"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
