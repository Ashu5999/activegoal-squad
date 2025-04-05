
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, X } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Sample data for buddies
const buddiesData = [
  {
    name: 'Jessica Lee',
    location: 'Boston, MA',
    goal: 'Weight Loss',
    companions: 18,
    image: 'https://i.pravatar.cc/150?img=5',
    workoutCount: 157
  },
  {
    name: 'David Kim',
    location: 'San Francisco, CA',
    goal: 'Muscle Gain',
    companions: 24,
    image: 'https://i.pravatar.cc/150?img=6',
    workoutCount: 203
  },
  {
    name: 'Maria Garcia',
    location: 'Chicago, IL',
    goal: 'Weight Loss',
    companions: 12,
    image: 'https://i.pravatar.cc/150?img=7',
    workoutCount: 89
  }
];

const requestsData = [
  {
    name: 'Jason Miller',
    location: 'Denver, CO',
    goal: 'Weight Loss',
    companions: 9,
    image: 'https://i.pravatar.cc/150?img=15',
    workoutCount: 42
  }
];

const suggestedData = [
  {
    name: 'Tina Chen',
    location: 'Seattle, WA',
    goal: 'Weight Loss',
    companions: 16,
    image: 'https://i.pravatar.cc/150?img=23',
    workoutCount: 87
  },
  {
    name: 'Robert Smith',
    location: 'Austin, TX',
    goal: 'Muscle Gain',
    companions: 7,
    image: 'https://i.pravatar.cc/150?img=32',
    workoutCount: 45
  }
];

const Friends = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("buddies");
  
  const handleFindNewBuddies = () => {
    navigate("/buddy-match");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    toast.info("Search cleared");
  };

  // Filter function based on search term
  const getFilteredProfiles = (profiles: typeof buddiesData) => {
    if (!searchTerm) return profiles;
    
    return profiles.filter(profile => 
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      profile.goal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Get filtered data for each tab
  const filteredBuddies = getFilteredProfiles(buddiesData);
  const filteredRequests = getFilteredProfiles(requestsData);
  const filteredSuggested = getFilteredProfiles(suggestedData);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Fitness Buddies</h1>
          <p className="text-muted-foreground">Connect with others and motivate each other</p>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for buddies by name or fitness goal..." 
                  className="pl-10 pr-10"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={clearSearch}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <Button 
                className="bg-fitness-primary hover:bg-fitness-secondary"
                onClick={handleFindNewBuddies}
              >
                <UserPlus size={16} className="mr-2" />
                Find New Buddies
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="buddies" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-6">
            <TabsTrigger value="buddies">Your Buddies</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buddies">
            {filteredBuddies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredBuddies.map((buddy, index) => (
                  <ProfileCard
                    key={index}
                    name={buddy.name}
                    location={buddy.location}
                    goal={buddy.goal}
                    companions={buddy.companions}
                    image={buddy.image}
                    workoutCount={buddy.workoutCount}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No buddies found matching "{searchTerm}"</p>
                <Button variant="outline" onClick={clearSearch}>Clear Search</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="requests">
            {filteredRequests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredRequests.map((request, index) => (
                  <ProfileCard
                    key={index}
                    name={request.name}
                    location={request.location}
                    goal={request.goal}
                    companions={request.companions}
                    image={request.image}
                    workoutCount={request.workoutCount}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No requests found matching "{searchTerm}"</p>
                <Button variant="outline" onClick={clearSearch}>Clear Search</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="suggested">
            {filteredSuggested.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredSuggested.map((suggestion, index) => (
                  <ProfileCard
                    key={index}
                    name={suggestion.name}
                    location={suggestion.location}
                    goal={suggestion.goal}
                    companions={suggestion.companions}
                    image={suggestion.image}
                    workoutCount={suggestion.workoutCount}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No suggestions found matching "{searchTerm}"</p>
                <Button variant="outline" onClick={clearSearch}>Clear Search</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Friends;
