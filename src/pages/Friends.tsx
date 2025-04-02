
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Friends = () => {
  const navigate = useNavigate();
  
  const handleFindNewBuddies = () => {
    navigate("/buddy-match");
  };

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
                  className="pl-10"
                />
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
        
        <Tabs defaultValue="buddies">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-6">
            <TabsTrigger value="buddies">Your Buddies</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buddies">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Jessica Lee', 'David Kim', 'Maria Garcia'].map((name, index) => (
                <ProfileCard
                  key={index}
                  name={name}
                  location={["Boston, MA", "San Francisco, CA", "Chicago, IL"][index]}
                  goal="Weight Loss"
                  companions={[18, 24, 12][index]}
                  image={`https://i.pravatar.cc/150?img=${index + 5}`}
                  workoutCount={[157, 203, 89][index]}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="requests">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProfileCard
                name="Jason Miller"
                location="Denver, CO"
                goal="Weight Loss"
                companions={9}
                image="https://i.pravatar.cc/150?img=15"
                workoutCount={42}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="suggested">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProfileCard
                name="Tina Chen"
                location="Seattle, WA"
                goal="Weight Loss"
                companions={16}
                image="https://i.pravatar.cc/150?img=23"
                workoutCount={87}
              />
              <ProfileCard
                name="Robert Smith"
                location="Austin, TX"
                goal="Muscle Gain"
                companions={7}
                image="https://i.pravatar.cc/150?img=32"
                workoutCount={45}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Friends;
