
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const Settings = () => {
  const [profileData, setProfileData] = useState({
    name: "Alex Taylor",
    email: "alex.taylor@example.com",
    location: "New York, NY",
    bio: "Fitness enthusiast looking to lose weight and build healthy habits."
  });

  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    buddy: true,
    goals: true
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showActivity: true
  });

  const handleProfileChange = (field: keyof typeof profileData, value: string) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
  };

  const handleNotificationChange = (field: keyof typeof notifications, checked: boolean) => {
    setNotifications({
      ...notifications,
      [field]: checked
    });
  };

  const handlePrivacyChange = (field: keyof typeof privacy, checked: boolean) => {
    setPrivacy({
      ...privacy,
      [field]: checked
    });
  };

  const saveProfile = () => {
    toast.success("Profile settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Profile Settings</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={profileData.name}
                    onChange={(e) => handleProfileChange("name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => handleProfileChange("email", e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  value={profileData.location}
                  onChange={(e) => handleProfileChange("location", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea 
                  id="bio" 
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={profileData.bio}
                  onChange={(e) => handleProfileChange("bio", e.target.value)}
                />
              </div>
              
              <div className="flex justify-end">
                <Button 
                  className="bg-fitness-primary hover:bg-fitness-secondary"
                  onClick={saveProfile}
                >
                  Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Notification Preferences</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                </div>
                <Switch 
                  checked={notifications.push} 
                  onCheckedChange={(checked) => handleNotificationChange("push", checked)} 
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Updates</h3>
                  <p className="text-sm text-muted-foreground">Receive workout summaries via email</p>
                </div>
                <Switch 
                  checked={notifications.email} 
                  onCheckedChange={(checked) => handleNotificationChange("email", checked)} 
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Buddy Activity</h3>
                  <p className="text-sm text-muted-foreground">Get notified when buddies complete workouts</p>
                </div>
                <Switch 
                  checked={notifications.buddy} 
                  onCheckedChange={(checked) => handleNotificationChange("buddy", checked)} 
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Goal Reminders</h3>
                  <p className="text-sm text-muted-foreground">Receive reminders about your fitness goals</p>
                </div>
                <Switch 
                  checked={notifications.goals} 
                  onCheckedChange={(checked) => handleNotificationChange("goals", checked)} 
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Privacy Settings</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Public Profile</h3>
                  <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                </div>
                <Switch 
                  checked={privacy.publicProfile} 
                  onCheckedChange={(checked) => handlePrivacyChange("publicProfile", checked)} 
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Show Activity</h3>
                  <p className="text-sm text-muted-foreground">Share your workouts in the activity feed</p>
                </div>
                <Switch 
                  checked={privacy.showActivity} 
                  onCheckedChange={(checked) => handlePrivacyChange("showActivity", checked)} 
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
