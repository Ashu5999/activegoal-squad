
import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dumbbell, MapPin, Users } from "lucide-react";
import { toast } from "sonner";

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
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/settings");
  };

  const handleAddBuddy = () => {
    toast.success(`Added ${name} as a fitness buddy!`);
  };

  return (
    <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="h-28 bg-gradient-to-r from-fitness-primary to-fitness-secondary" />
      </CardHeader>
      <CardContent className="pt-0 -mt-14 text-center">
        <Avatar className="h-28 w-28 mx-auto border-4 border-white dark:border-gray-800 ring-2 ring-fitness-primary shadow-md">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-xl bg-gradient-to-br from-fitness-primary to-fitness-secondary text-white">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-xl mt-3">{name}</h3>
        <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
          <MapPin size={14} className="text-fitness-primary" />
          <span>{location}</span>
        </div>
        <Badge variant="secondary" className="mt-2 bg-gradient-to-r from-fitness-primary/20 to-fitness-secondary/20 text-fitness-primary hover:from-fitness-primary/30 hover:to-fitness-secondary/30">
          {goal}
        </Badge>
        <div className="grid grid-cols-2 gap-4 my-5 p-3 bg-muted/30 rounded-lg mt-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-fitness-primary font-semibold">
              <Dumbbell size={18} className="mr-1" />
              <span className="text-lg">{workoutCount}</span>
            </div>
            <span className="text-xs text-muted-foreground">Workouts</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-fitness-primary font-semibold">
              <Users size={18} className="mr-1" />
              <span className="text-lg">{companions}</span>
            </div>
            <span className="text-xs text-muted-foreground">Buddies</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pt-0 pb-4">
        {isCurrentUser ? (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleEditProfile}
            className="border-fitness-primary text-fitness-primary hover:bg-fitness-primary hover:text-white"
          >
            Edit Profile
          </Button>
        ) : (
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-fitness-primary to-fitness-secondary shadow-md hover:shadow-lg hover:opacity-90 text-white transition-all"
            onClick={handleAddBuddy}
          >
            Add Buddy
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
