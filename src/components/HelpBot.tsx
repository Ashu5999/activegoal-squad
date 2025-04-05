
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, X, Send, Bot, Dumbbell, Calendar, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

// Sample workout plans
const workoutPlans = {
  weightLoss: [
    {
      name: "Fat Burning HIIT",
      duration: "30 minutes",
      frequency: "3-4 times per week",
      exercises: [
        "Jumping jacks: 30 seconds",
        "Push-ups: 30 seconds",
        "Burpees: 30 seconds",
        "Mountain climbers: 30 seconds",
        "Rest: 15 seconds between exercises",
        "Complete 4 rounds"
      ]
    },
    {
      name: "Cardio and Core",
      duration: "45 minutes",
      frequency: "2-3 times per week",
      exercises: [
        "20 min jogging/cycling/elliptical",
        "Plank: 30 seconds × 3 sets",
        "Russian twists: 15 reps × 3 sets",
        "Bicycle crunches: 20 reps × 3 sets",
        "Leg raises: 12 reps × 3 sets"
      ]
    }
  ],
  muscleGain: [
    {
      name: "Upper Body Focus",
      duration: "50 minutes",
      frequency: "2 times per week",
      exercises: [
        "Bench press: 4 sets of 8-10 reps",
        "Bent-over rows: 4 sets of 8-10 reps",
        "Overhead press: 3 sets of 10 reps",
        "Pull-ups/assisted pull-ups: 3 sets to failure",
        "Tricep dips: 3 sets of 12 reps",
        "Bicep curls: 3 sets of 12 reps"
      ]
    },
    {
      name: "Lower Body Strength",
      duration: "50 minutes",
      frequency: "2 times per week",
      exercises: [
        "Squats: 4 sets of 8-10 reps",
        "Deadlifts: 4 sets of 8-10 reps",
        "Lunges: 3 sets of 10 reps per leg",
        "Leg press: 3 sets of 12 reps",
        "Calf raises: 3 sets of 15 reps",
        "Hamstring curls: 3 sets of 12 reps"
      ]
    }
  ],
  endurance: [
    {
      name: "Distance Running Plan",
      duration: "45-60 minutes",
      frequency: "3-4 times per week",
      exercises: [
        "Monday: 5K easy pace",
        "Wednesday: Interval training (400m sprints × 8)",
        "Friday: Tempo run (3 miles at moderate pace)",
        "Sunday: Long run (gradually build up to 10K+)"
      ]
    },
    {
      name: "Full Body Endurance",
      duration: "60 minutes",
      frequency: "2-3 times per week",
      exercises: [
        "Circuit training: perform each exercise for 45 seconds with 15 seconds rest",
        "Bodyweight squats",
        "Push-ups",
        "Kettlebell swings",
        "Rowing machine",
        "Box jumps",
        "Battle ropes",
        "TRX rows",
        "Complete 3-4 rounds with 2 minutes rest between rounds"
      ]
    }
  ],
  generalHealth: [
    {
      name: "Balanced Fitness Routine",
      duration: "40 minutes",
      frequency: "3 times per week",
      exercises: [
        "5 min warm-up (light cardio)",
        "Strength circuit (2 rounds):",
        "- Bodyweight squats: 15 reps",
        "- Push-ups: 10 reps",
        "- Dumbbell rows: 10 reps each side",
        "- Glute bridges: 15 reps",
        "15 min cardio (brisk walking, jogging, cycling)",
        "5 min stretching"
      ]
    },
    {
      name: "Flexibility & Mobility",
      duration: "30 minutes",
      frequency: "2-3 times per week",
      exercises: [
        "Cat-cow stretch: 10 reps",
        "World's greatest stretch: 5 reps each side",
        "Hip flexor stretch: 30 seconds each side",
        "Thoracic spine rotations: 10 each side",
        "Downward dog: 30 seconds hold",
        "Child's pose: 30 seconds hold",
        "Supine spinal twist: 30 seconds each side"
      ]
    }
  ]
};

const HelpBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean; plan?: any }[]>([
    { text: "👋 Hi! I'm your fitness assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleBot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast.info("Help Assistant is here for you!");
    }
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isBot: false }]);
    
    // Simulate bot response
    setTimeout(() => {
      let response = "";
      let plan = null;
      
      // Check for workout plan requests
      if (inputValue.toLowerCase().includes("workout plan") || 
          inputValue.toLowerCase().includes("exercise") || 
          inputValue.toLowerCase().includes("routine")) {
        
        if (inputValue.toLowerCase().includes("weight loss") || inputValue.toLowerCase().includes("lose weight")) {
          response = "Here's a weight loss workout plan that might help you:";
          plan = workoutPlans.weightLoss;
        } 
        else if (inputValue.toLowerCase().includes("muscle") || inputValue.toLowerCase().includes("strength") || inputValue.toLowerCase().includes("gain")) {
          response = "Here's a muscle-building workout plan to get you started:";
          plan = workoutPlans.muscleGain;
        }
        else if (inputValue.toLowerCase().includes("endurance") || inputValue.toLowerCase().includes("stamina") || inputValue.toLowerCase().includes("cardio")) {
          response = "Here's an endurance-focused workout plan:";
          plan = workoutPlans.endurance;
        }
        else {
          response = "Here's a general fitness plan to improve your overall health:";
          plan = workoutPlans.generalHealth;
        }
      } 
      else if (inputValue.toLowerCase().includes("buddy") || inputValue.toLowerCase().includes("friend") || inputValue.toLowerCase().includes("partner")) {
        response = "Looking for workout buddies? Check out the 'Buddy Match' section where you can filter by location, goals, and availability!";
      } 
      else if (inputValue.toLowerCase().includes("profile")) {
        response = "You can update your profile information in the 'Settings' section. Make sure to add your fitness goals and availability to find better matches!";
      } 
      else if (inputValue.toLowerCase().includes("goal")) {
        response = "Setting clear fitness goals is important! Go to the 'Goals' section to define what you want to achieve - whether it's weight loss, muscle gain, or improving endurance.";
      }
      else {
        response = "I'm here to help with your fitness journey! You can ask about workout plans, finding buddies, or setting goals. Try asking for a specific type of workout plan!";
      }
      
      setMessages(prev => [...prev, { text: response, isBot: true, plan }]);
    }, 1000);
    
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const formatWorkoutPlan = (plan: any) => {
    return (
      <div className="mt-2 space-y-4">
        {plan.map((workout: any, index: number) => (
          <div key={index} className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
            <div className="flex items-center gap-2 font-semibold mb-1">
              <Dumbbell size={16} className="text-fitness-primary" />
              {workout.name}
            </div>
            <div className="grid grid-cols-2 text-xs text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {workout.duration}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {workout.frequency}
              </div>
            </div>
            <ul className="text-sm space-y-1 list-disc pl-5">
              {workout.exercises.map((exercise: string, i: number) => (
                <li key={i}>{exercise}</li>
              ))}
            </ul>
          </div>
        ))}
        <Button 
          className="w-full bg-fitness-primary hover:bg-fitness-primary/90 text-white"
          size="sm"
          onClick={() => toast.success("Workout plan added to your schedule!")}
        >
          Add to My Schedule
        </Button>
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-80 sm:w-96 mb-4 shadow-xl border border-purple-200 dark:border-purple-900 overflow-hidden">
          <div className="purple-gradient p-3 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <Bot size={20} />
              <h3 className="font-bold">Fitness Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-purple-500/20"
              onClick={toggleBot}
            >
              <X size={18} />
            </Button>
          </div>
          
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "max-w-[80%]",
                    msg.isBot 
                      ? "self-start" 
                      : "self-end"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-lg",
                    msg.isBot 
                      ? "bg-purple-100 dark:bg-purple-900/50 text-gray-800 dark:text-gray-200 rounded-bl-none" 
                      : "bg-fitness-primary text-white rounded-br-none"
                  )}>
                    {msg.text}
                  </div>
                  
                  {msg.plan && formatWorkoutPlan(msg.plan)}
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask for workout plans..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-fitness-primary"
              />
              <Button 
                className="bg-fitness-primary hover:bg-fitness-primary/90"
                size="icon"
                onClick={sendMessage}
              >
                <Send size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button 
        onClick={toggleBot}
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg purple-gradient text-white",
          !isOpen && "animate-bounce"
        )}
      >
        <HelpCircle size={24} />
      </Button>
    </div>
  );
};

export default HelpBot;
