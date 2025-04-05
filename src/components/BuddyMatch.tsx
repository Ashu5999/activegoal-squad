
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Users, MapPin, Calendar, Search, Heart, Filter, Clock, Medal, Dumbbell } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

// Sample data for matches
const dummyMatches = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    location: "2.3 miles away",
    goals: ["Weight Loss", "Cardio"],
    availability: "Evenings & Weekends",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Love running and HIIT workouts. Looking for a consistent gym partner!",
    experience: "Intermediate"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 32,
    location: "1.5 miles away",
    goals: ["Muscle Gain", "Strength"],
    availability: "Mornings",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "Passionate about weightlifting. Can help with proper form and technique.",
    experience: "Advanced"
  },
  {
    id: 3,
    name: "Aisha Patel",
    age: 26,
    location: "3.7 miles away",
    goals: ["General Fitness", "Flexibility"],
    availability: "Afternoons",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Yoga instructor looking for friends to try new workout classes with.",
    experience: "Expert"
  },
  {
    id: 4,
    name: "James Wilson",
    age: 30,
    location: "0.8 miles away",
    goals: ["Endurance", "Marathon Training"],
    availability: "Early mornings & evenings",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Training for my third marathon. Looking for running buddies!",
    experience: "Intermediate"
  }
];

// Sample workouts for planned activities
const suggestedWorkouts = [
  {
    id: 1,
    title: "Morning HIIT",
    type: "High Intensity",
    duration: "30 mins",
    participants: 3,
    time: "6:30 AM",
    location: "Central Park",
    description: "Start your day with an energizing HIIT session"
  },
  {
    id: 2,
    title: "Strength Training",
    type: "Weights",
    duration: "45 mins",
    participants: 2,
    time: "5:30 PM",
    location: "Gold's Gym",
    description: "Focus on upper body strength and proper form"
  },
  {
    id: 3,
    title: "Yoga Flow",
    type: "Flexibility",
    duration: "60 mins",
    participants: 4,
    time: "7:00 PM",
    location: "Serenity Studio",
    description: "Relax and improve flexibility after a long day"
  }
];

const BuddyMatchComponent = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [distance, setDistance] = useState([5]);
  const [availabilityFilter, setAvailabilityFilter] = useState<string[]>([]);
  const [experienceFilter, setExperienceFilter] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isVirtual, setIsVirtual] = useState(false);
  const [selectedTab, setSelectedTab] = useState("find");
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDistanceChange = (value: number[]) => {
    setDistance(value);
  };

  const toggleAvailability = (time: string) => {
    setAvailabilityFilter(prev => 
      prev.includes(time) 
        ? prev.filter(t => t !== time) 
        : [...prev, time]
    );
  };

  const toggleExperience = (level: string) => {
    setExperienceFilter(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    );
  };

  const handleConnect = (id: number) => {
    toast.success("Connection request sent!");
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(matchId => matchId !== id) 
        : [...prev, id]
    );
  };

  const joinWorkout = (id: number) => {
    toast.success("You've joined the workout! Check your schedule.");
  };

  const filteredMatches = dummyMatches.filter(match => {
    // Apply search filter
    if (searchQuery && !match.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !match.goals.some(goal => goal.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Apply experience filter
    if (experienceFilter.length > 0 && !experienceFilter.includes(match.experience)) {
      return false;
    }
    
    // Apply availability filter
    if (availabilityFilter.length > 0 && 
        !availabilityFilter.some(time => match.availability.includes(time))) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="space-y-6">
      <Tabs defaultValue="find" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="find" className="flex items-center gap-2">
            <Search size={16} />
            Find Buddies
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Heart size={16} />
            Favorites
          </TabsTrigger>
          <TabsTrigger value="workouts" className="flex items-center gap-2">
            <Calendar size={16} />
            Group Workouts
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="find" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <Input
                placeholder="Search by name, goals or location..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full"
              />
            </div>
            <Button
              variant="outline"
              className="md:w-auto w-full flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              Filters
            </Button>
          </div>
          
          {showFilters && (
            <Card className="mt-4 mb-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Distance ({distance[0]} miles)</h3>
                    <Slider
                      value={distance}
                      max={25}
                      step={1}
                      onValueChange={handleDistanceChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Availability</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Mornings", "Afternoons", "Evenings", "Weekends"].map((time) => (
                        <Button
                          key={time}
                          variant={availabilityFilter.includes(time) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleAvailability(time)}
                          className={availabilityFilter.includes(time) ? "bg-fitness-primary" : ""}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Experience Level</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                        <Button
                          key={level}
                          variant={experienceFilter.includes(level) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleExperience(level)}
                          className={experienceFilter.includes(level) ? "bg-fitness-primary" : ""}
                        >
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="virtual"
                      checked={isVirtual}
                      onCheckedChange={setIsVirtual}
                    />
                    <Label htmlFor="virtual">Virtual workouts only</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMatches.map((match) => (
              <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-purple-200">
                        <img src={match.avatar} alt={match.name} />
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{match.name}, {match.age}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin size={14} /> {match.location}
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full ${favorites.includes(match.id) ? 'text-pink-500' : ''}`}
                      onClick={() => toggleFavorite(match.id)}
                    >
                      <Heart fill={favorites.includes(match.id) ? 'currentColor' : 'none'} size={18} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm mb-2">{match.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {match.goals.map((goal, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full px-2 py-1"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{match.availability}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Medal size={14} />
                      <span>{match.experience}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button 
                    onClick={() => handleConnect(match.id)}
                    className="w-full bg-fitness-primary hover:bg-fitness-primary/90"
                  >
                    Connect
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="pt-4">
          {favorites.length === 0 ? (
            <div className="text-center py-10">
              <Heart size={40} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
              <p className="text-muted-foreground">Heart your favorite potential workout buddies to see them here</p>
              <Button 
                className="mt-4 bg-fitness-primary" 
                onClick={() => setSelectedTab("find")}
              >
                Find buddies
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dummyMatches
                .filter(match => favorites.includes(match.id))
                .map((match) => (
                  <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12 border-2 border-purple-200">
                            <img src={match.avatar} alt={match.name} />
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{match.name}, {match.age}</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <MapPin size={14} /> {match.location}
                            </CardDescription>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-pink-500 rounded-full"
                          onClick={() => toggleFavorite(match.id)}
                        >
                          <Heart fill="currentColor" size={18} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm mb-2">{match.bio}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {match.goals.map((goal, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full px-2 py-1"
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button 
                        onClick={() => handleConnect(match.id)}
                        className="w-full bg-fitness-primary hover:bg-fitness-primary/90"
                      >
                        Message
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              }
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="workouts" className="pt-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Upcoming Group Workouts</h3>
              <Button variant="outline" size="sm" className="gap-1">
                <Calendar size={16} />
                My Schedule
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {suggestedWorkouts.map(workout => (
                <Card key={workout.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{workout.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin size={14} /> {workout.location}
                        </CardDescription>
                      </div>
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full px-2 py-1">
                        {workout.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm mb-3">{workout.description}</p>
                    <div className="grid grid-cols-3 text-sm mb-2 gap-2">
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-muted-foreground" />
                        <span>{workout.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Dumbbell size={14} className="text-muted-foreground" />
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} className="text-muted-foreground" />
                        <span>{workout.participants} people</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button 
                      onClick={() => joinWorkout(workout.id)}
                      className="w-full bg-fitness-primary hover:bg-fitness-primary/90"
                    >
                      Join Workout
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-4">
              <Button variant="outline" size="lg" className="gap-2">
                <Calendar size={18} />
                Create New Group Workout
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BuddyMatchComponent;
