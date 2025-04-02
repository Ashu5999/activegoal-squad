
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface BuddyProfile {
  id: string;
  name: string;
  location: string;
  goal: string;
  companions: number;
  image: string;
  workoutCount: number;
  compatibilityScore: number;
}

const buddies: BuddyProfile[] = [
  {
    id: "1",
    name: "Jessica Lee",
    location: "Boston, MA",
    goal: "Weight Loss",
    companions: 18,
    image: "https://i.pravatar.cc/150?img=5",
    workoutCount: 157,
    compatibilityScore: 92
  },
  {
    id: "2",
    name: "David Kim",
    location: "San Francisco, CA",
    goal: "Weight Loss",
    companions: 24,
    image: "https://i.pravatar.cc/150?img=12",
    workoutCount: 203,
    compatibilityScore: 87
  },
  {
    id: "3",
    name: "Maria Garcia",
    location: "Chicago, IL",
    goal: "Weight Loss",
    companions: 12,
    image: "https://i.pravatar.cc/150?img=9",
    workoutCount: 89,
    compatibilityScore: 85
  }
];

const BuddyMatch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBuddies, setSelectedBuddies] = useState<string[]>([]);

  const handleAddBuddy = (id: string) => {
    setSelectedBuddies([...selectedBuddies, id]);
    toast.success(`Added ${buddies.find(b => b.id === id)?.name} as a fitness buddy!`);
    
    if (currentIndex < buddies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    if (currentIndex < buddies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentBuddy = buddies[currentIndex];
  const isLastBuddy = currentIndex === buddies.length - 1;

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Find Fitness Buddies</h2>
        <p className="text-muted-foreground">
          We've matched you with people who share your goals
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-fitness-primary text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">
            {currentBuddy.compatibilityScore}%
          </div>
        </div>
        
        <div className="mb-8">
          <ProfileCard
            name={currentBuddy.name}
            location={currentBuddy.location}
            goal={currentBuddy.goal}
            companions={currentBuddy.companions}
            image={currentBuddy.image}
            workoutCount={currentBuddy.workoutCount}
          />
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={handleSkip} disabled={isLastBuddy}>
            Skip
          </Button>
          <Button 
            className="bg-fitness-primary hover:bg-fitness-secondary"
            onClick={() => handleAddBuddy(currentBuddy.id)}
          >
            Add Buddy
          </Button>
        </div>
        
        {selectedBuddies.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {selectedBuddies.length} {selectedBuddies.length === 1 ? 'buddy' : 'buddies'} added
            </p>
          </div>
        )}
        
        {isLastBuddy && (
          <div className="mt-8 text-center">
            <p className="font-medium">That's all the matches for now!</p>
            <p className="text-sm text-muted-foreground mt-1">Check back later for more buddy suggestions</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuddyMatch;
