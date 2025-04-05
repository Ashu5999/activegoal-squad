
import React, { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import BuddyMatchComponent from "@/components/BuddyMatch";
import HelpBot from "@/components/HelpBot";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Clock, Users, Dumbbell, Target, ArrowRight } from 'lucide-react';

// Sample data for stats
const activityData = [
  { name: 'Mon', workouts: 1, duration: 30 },
  { name: 'Tue', workouts: 2, duration: 75 },
  { name: 'Wed', workouts: 0, duration: 0 },
  { name: 'Thu', workouts: 1, duration: 45 },
  { name: 'Fri', workouts: 2, duration: 90 },
  { name: 'Sat', workouts: 3, duration: 120 },
  { name: 'Sun', workouts: 1, duration: 60 },
];

// Sample workout statistics
const workoutStats = {
  totalBuddies: 6,
  weeklyWorkouts: 10,
  averageDuration: 64,
  completionRate: 92
};

const BuddyMatchPage = () => {
  const [activeTab, setActiveTab] = useState("buddies");
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Hide welcome message after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 font-poppins">
      <NavBar />
      
      {showWelcome && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-10 purple-gradient text-white px-5 py-3 rounded-lg shadow-lg"
        >
          🎉 Welcome to Buddy Match! Find your perfect workout partner.
        </motion.div>
      )}
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-montserrat font-bold mb-4 text-center text-gray-800 dark:text-white">
          Find Your Perfect <span className="text-fitness-primary">Workout Buddy</span>
        </h1>
        
        <Tabs defaultValue="buddies" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="buddies" className="flex items-center gap-2">
                <Users size={16} />
                Buddy Match
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex items-center gap-2">
                <LineChart size={16} />
                Activity Stats
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="buddies">
            <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-200 dark:border-purple-900">
              <BuddyMatchComponent />
            </div>
          </TabsContent>
          
          <TabsContent value="stats">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-900">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Workout Buddies</p>
                        <h3 className="text-2xl font-bold">{workoutStats.totalBuddies}</h3>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                        <Users className="h-6 w-6 text-fitness-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-900">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Weekly Workouts</p>
                        <h3 className="text-2xl font-bold">{workoutStats.weeklyWorkouts}</h3>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                        <Dumbbell className="h-6 w-6 text-fitness-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-900">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Avg. Duration</p>
                        <h3 className="text-2xl font-bold">{workoutStats.averageDuration} min</h3>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-fitness-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-900">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Completion Rate</p>
                        <h3 className="text-2xl font-bold">{workoutStats.completionRate}%</h3>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                        <Target className="h-6 w-6 text-fitness-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-200 dark:border-purple-900">
                <h3 className="text-lg font-bold mb-4">Weekly Activity</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={activityData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="workouts"
                        stroke="#8B5CF6"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                      <Line 
                        yAxisId="right" 
                        type="monotone" 
                        dataKey="duration" 
                        stroke="#C4B5FD" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    View Detailed Report <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Button 
                  className="bg-fitness-primary hover:bg-fitness-primary/90"
                  onClick={() => setActiveTab("buddies")}
                >
                  Find Workout Buddies
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Help Bot */}
      <HelpBot />
    </div>
  );
};

export default BuddyMatchPage;
