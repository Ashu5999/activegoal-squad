
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkoutCard from "./WorkoutCard";

const ACTIVITIES = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      image: "https://i.pravatar.cc/150?img=1"
    },
    workoutType: "Running",
    duration: "45 min",
    timestamp: "Today, 8:30 AM",
    description: "Morning run completed! 5K at the park with beautiful weather. Feeling energized for the day!",
    likes: 24,
    comments: 3,
    hasLiked: true
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      image: "https://i.pravatar.cc/150?img=8"
    },
    workoutType: "Strength",
    duration: "1h 10min",
    timestamp: "Yesterday",
    description: "New PR on bench press today! Pushing to reach my goals this month. Who else is working on strength gains?",
    likes: 18,
    comments: 7
  },
  {
    id: 3,
    user: {
      name: "Alex Rodriguez",
      image: "https://i.pravatar.cc/150?img=3"
    },
    workoutType: "Cycling",
    duration: "1h 30min",
    timestamp: "Yesterday",
    description: "Long ride through the mountains. The views were worth the climb!",
    likes: 32,
    comments: 5
  },
  {
    id: 4,
    user: {
      name: "Emma Wilson",
      image: "https://i.pravatar.cc/150?img=5"
    },
    workoutType: "Yoga",
    duration: "45 min",
    timestamp: "2 days ago",
    description: "Started my morning with a calming yoga session. Feeling centered and ready for anything!",
    likes: 15,
    comments: 2
  }
];

const ActivityFeed = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="buddies">My Buddies</TabsTrigger>
          <TabsTrigger value="yours">Your Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4 mt-4">
          {ACTIVITIES.map((activity) => (
            <WorkoutCard key={activity.id} {...activity} />
          ))}
        </TabsContent>
        
        <TabsContent value="buddies" className="space-y-4 mt-4">
          {ACTIVITIES.slice(0, 2).map((activity) => (
            <WorkoutCard key={activity.id} {...activity} />
          ))}
        </TabsContent>
        
        <TabsContent value="yours" className="space-y-4 mt-4">
          <WorkoutCard
            user={{
              name: "You",
              image: "https://i.pravatar.cc/150?img=11"
            }}
            workoutType="HIIT"
            duration="30 min"
            timestamp="3 days ago"
            description="Quick HIIT session completed! Feeling the burn but so worth it."
            likes={9}
            comments={1}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ActivityFeed;
