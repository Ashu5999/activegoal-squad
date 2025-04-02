
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Heart, MessageSquare, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkoutCardProps {
  user: {
    name: string;
    image?: string;
  };
  workoutType: string;
  duration: string;
  timestamp: string;
  description: string;
  likes: number;
  comments: number;
  hasLiked?: boolean;
}

const WorkoutCard = ({
  user,
  workoutType,
  duration,
  timestamp,
  description,
  likes,
  comments,
  hasLiked = false,
}: WorkoutCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <div className="text-xs text-muted-foreground">{timestamp}</div>
            </div>
          </div>
          <Badge variant="outline" className="bg-fitness-primary/10 text-fitness-primary border-fitness-primary/20">
            {workoutType}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="inline-flex items-center bg-muted px-3 py-1 rounded-full text-xs">
          <Clock size={12} className="mr-1" />
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        <Button variant="ghost" size="sm" className={hasLiked ? "text-fitness-primary" : ""}>
          <Heart size={16} className="mr-1" fill={hasLiked ? "currentColor" : "none"} /> 
          <span>{likes}</span>
        </Button>
        <Button variant="ghost" size="sm">
          <MessageSquare size={16} className="mr-1" /> 
          <span>{comments}</span>
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
