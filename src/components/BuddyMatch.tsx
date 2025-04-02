
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Medal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [direction, setDirection] = useState(0);

  const handleAddBuddy = (id: string) => {
    setSelectedBuddies([...selectedBuddies, id]);
    toast.success(`Added ${buddies.find(b => b.id === id)?.name} as a fitness buddy!`, {
      icon: "👍",
    });
    
    if (currentIndex < buddies.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    if (currentIndex < buddies.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentBuddy = buddies[currentIndex];
  const isLastBuddy = currentIndex === buddies.length - 1;
  const isFirstBuddy = currentIndex === 0;

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-fitness-primary to-fitness-secondary bg-clip-text text-transparent animate-pulse">Find Fitness Buddies</h2>
        <p className="text-muted-foreground mt-2">
          We've matched you with people who share your goals
        </p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-fitness-primary to-fitness-secondary text-white font-bold rounded-full h-16 w-16 flex items-center justify-center shadow-lg border-2 border-white">
                <div className="flex flex-col items-center">
                  <Medal size={16} />
                  <span className="text-lg">{currentBuddy.compatibilityScore}%</span>
                </div>
              </div>
            </div>
            
            <ProfileCard
              name={currentBuddy.name}
              location={currentBuddy.location}
              goal={currentBuddy.goal}
              companions={currentBuddy.companions}
              image={currentBuddy.image}
              workoutCount={currentBuddy.workoutCount}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 justify-center mt-6">
          <Button 
            variant="outline" 
            onClick={handlePrevious} 
            disabled={isFirstBuddy}
            className="border-fitness-primary text-fitness-primary hover:bg-fitness-primary hover:text-white"
          >
            <ChevronLeft className="mr-1" size={18} /> Previous
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleSkip} 
            disabled={isLastBuddy}
            className="border-fitness-primary text-fitness-primary hover:bg-fitness-primary hover:text-white"
          >
            Skip <ChevronRight className="ml-1" size={18} />
          </Button>
          
          <Button 
            className="bg-gradient-to-r from-fitness-primary to-fitness-secondary hover:opacity-90"
            onClick={() => handleAddBuddy(currentBuddy.id)}
          >
            Add Buddy
          </Button>
        </div>
        
        {selectedBuddies.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <p className="text-sm font-medium bg-fitness-primary/10 inline-block px-4 py-2 rounded-full">
              {selectedBuddies.length} {selectedBuddies.length === 1 ? 'buddy' : 'buddies'} added
            </p>
          </motion.div>
        )}
        
        {isLastBuddy && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center p-6 bg-gradient-to-r from-fitness-primary/10 to-fitness-secondary/10 rounded-lg"
          >
            <p className="font-medium text-lg">That's all the matches for now!</p>
            <p className="text-sm text-muted-foreground mt-2">Check back later for more buddy suggestions</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BuddyMatch;
