
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dumbbell, MapPin, Users } from "lucide-react";

interface ProfileCardProps {
  name: string;
  location: string;
  goal: string;
  companions: number;
  image?: string;
  workoutCount: number;
  isCurrentUser?: boolean;
}

const ProfileCard = ({ 
  name, 
  location, 
  goal, 
  companions, 
  image, 
  workoutCount, 
  isCurrentUser = false 
}: ProfileCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-24 bg-gradient-to-r from-fitness-primary to-fitness-secondary" />
      </CardHeader>
      <CardContent className="pt-0 -mt-12 text-center">
        <Avatar className="h-24 w-24 mx-auto border-4 border-white dark:border-gray-800">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-lg bg-muted">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-lg mt-2">{name}</h3>
        <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        <Badge variant="secondary" className="mt-2">
          {goal}
        </Badge>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-fitness-primary">
              <Dumbbell size={16} className="mr-1" />
              <span className="font-bold">{workoutCount}</span>
            </div>
            <span className="text-xs text-muted-foreground">Workouts</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-fitness-primary">
              <Users size={16} className="mr-1" />
              <span className="font-bold">{companions}</span>
            </div>
            <span className="text-xs text-muted-foreground">Buddies</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        {isCurrentUser ? (
          <Button variant="outline" size="sm">Edit Profile</Button>
        ) : (
          <Button variant="default" size="sm" className="bg-fitness-primary hover:bg-fitness-secondary">
            Add Buddy
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
