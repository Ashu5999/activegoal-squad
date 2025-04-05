
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Medal, Target, TrendingUp } from "lucide-react";
import HelpBot from "@/components/HelpBot";

const Profile = () => {
  const navigate = useNavigate();
  
  const handleEditProfile = () => {
    navigate("/settings");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-poppins">
      <NavBar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-montserrat font-bold mb-8 text-center text-gray-800 dark:text-white">
          Your Fitness <span className="text-fitness-primary">Journey</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileCard
              name="Alex Taylor"
              location="New York, NY"
              goal="Weight Loss"
              companions={14}
              image="https://i.pravatar.cc/150?img=11"
              workoutCount={37}
              isCurrentUser={true}
            />
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Card className="overflow-hidden border-purple-200 dark:border-purple-900 shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2 purple-gradient text-white">
                <h2 className="text-2xl font-bold font-montserrat">My Profile</h2>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="stats">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="stats">Stats</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="stats" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center space-x-3 hover:shadow-md transition-shadow">
                        <Dumbbell className="text-fitness-primary" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground">Total Workouts</p>
                          <p className="text-2xl font-bold">37</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center space-x-3 hover:shadow-md transition-shadow">
                        <TrendingUp className="text-fitness-primary" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground">Current Streak</p>
                          <p className="text-2xl font-bold">5 days</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center space-x-3 hover:shadow-md transition-shadow">
                        <Target className="text-fitness-primary" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground">Goals Completed</p>
                          <p className="text-2xl font-bold">3</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-center space-x-3 hover:shadow-md transition-shadow">
                        <Medal className="text-fitness-primary" size={24} />
                        <div>
                          <p className="text-sm text-muted-foreground">Achievements</p>
                          <p className="text-2xl font-bold">7</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button 
                        variant="outline" 
                        onClick={handleEditProfile}
                        className="border-fitness-primary text-fitness-primary hover:bg-fitness-primary hover:text-white"
                      >
                        Edit Profile
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="achievements">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center space-x-3 p-4 border border-purple-200 dark:border-purple-900 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                          <Medal className="text-yellow-500" size={32} />
                          <div>
                            <h3 className="font-medium">Achievement {i}</h3>
                            <p className="text-sm text-muted-foreground">Completed 1 week ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history">
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex justify-between p-4 border-b border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                          <div>
                            <h3 className="font-medium">Workout Session #{i}</h3>
                            <p className="text-sm text-muted-foreground">{i} day{i > 1 ? 's' : ''} ago</p>
                          </div>
                          <div className="text-right">
                            <span className="font-medium">45 min</span>
                            <p className="text-sm text-muted-foreground">Running</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Help Bot */}
      <HelpBot />
    </div>
  );
};

export default Profile;
