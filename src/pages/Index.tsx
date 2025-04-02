
import { useState } from "react";
import NavBar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";
import ActivityFeed from "@/components/ActivityFeed";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoalSelection from "@/components/GoalSelection";
import BuddyMatch from "@/components/BuddyMatch";
import { Calendar, Dumbbell, Users } from "lucide-react";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState<"goals" | "buddies">("goals");

  const handleFinishOnboarding = () => {
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <NavBar />
        <div className="container max-w-4xl mx-auto px-4 py-8">
          {onboardingStep === "goals" ? (
            <div className="space-y-6">
              <GoalSelection />
              <div className="flex justify-end mt-8">
                <Button onClick={() => setOnboardingStep("buddies")}>
                  Continue
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <BuddyMatch />
              <div className="flex justify-end mt-8">
                <Button 
                  className="bg-fitness-primary hover:bg-fitness-secondary"
                  onClick={handleFinishOnboarding}
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <ProfileCard
              name="Alex Taylor"
              location="New York, NY"
              goal="Weight Loss"
              companions={14}
              image="https://i.pravatar.cc/150?img=11"
              workoutCount={37}
              isCurrentUser={true}
            />
            
            <div className="bg-white dark:bg-fitness-dark rounded-lg shadow p-4">
              <h3 className="font-medium mb-3">Quick Access</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Dumbbell size={18} className="mr-2" />
                  My Workouts
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users size={18} className="mr-2" />
                  My Buddies
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar size={18} className="mr-2" />
                  Schedule
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-fitness-dark rounded-lg shadow p-6">
              <Tabs defaultValue="feed">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="feed">Activity Feed</TabsTrigger>
                  <TabsTrigger value="discover">Discover Buddies</TabsTrigger>
                </TabsList>
                
                <TabsContent value="feed">
                  <ActivityFeed />
                </TabsContent>
                
                <TabsContent value="discover">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Jason Miller",
                        location: "Denver, CO",
                        goal: "Weight Loss",
                        companions: 9,
                        image: "https://i.pravatar.cc/150?img=15",
                        workoutCount: 42
                      },
                      {
                        name: "Tina Chen",
                        location: "Seattle, WA",
                        goal: "Weight Loss",
                        companions: 16,
                        image: "https://i.pravatar.cc/150?img=23",
                        workoutCount: 87
                      }
                    ].map((buddy, index) => (
                      <ProfileCard key={index} {...buddy} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
