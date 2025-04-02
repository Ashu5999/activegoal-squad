
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Dumbbell, Heart, Trophy, Weight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Goal {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const goals: Goal[] = [
  {
    id: "weight-loss",
    icon: <Weight size={24} />,
    title: "Weight Loss",
    description: "Lose weight through cardio and dietary changes"
  },
  {
    id: "muscle-gain",
    icon: <Dumbbell size={24} />,
    title: "Muscle Gain",
    description: "Build muscle through strength training and protein intake"
  },
  {
    id: "endurance",
    icon: <Activity size={24} />,
    title: "Endurance",
    description: "Improve stamina through running, cycling, or swimming"
  },
  {
    id: "general-health",
    icon: <Heart size={24} />,
    title: "General Health",
    description: "Improve overall wellness through balanced activities"
  },
  {
    id: "specific-goal",
    icon: <Trophy size={24} />,
    title: "Specific Event",
    description: "Train for a specific event like marathon or competition"
  }
];

const GoalSelection = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFindBuddies = () => {
    if (selectedGoal) {
      toast.success(`Goal selected: ${goals.find(goal => goal.id === selectedGoal)?.title}`);
      navigate("/buddy-match");
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">What's your primary fitness goal?</h2>
        <p className="text-muted-foreground">
          We'll connect you with buddies who share similar goals
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <Card 
            key={goal.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              selectedGoal === goal.id 
                ? "border-2 border-fitness-primary bg-fitness-primary/5" 
                : "hover:border-fitness-secondary"
            }`}
            onClick={() => setSelectedGoal(goal.id)}
          >
            <div className="flex flex-col items-center text-center p-3 space-y-2">
              <div className={`p-3 rounded-full ${
                selectedGoal === goal.id 
                  ? "bg-fitness-primary text-white" 
                  : "bg-muted"
              }`}>
                {goal.icon}
              </div>
              <h3 className="font-medium text-lg">{goal.title}</h3>
              <p className="text-sm text-muted-foreground">{goal.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button 
          className="bg-fitness-primary hover:bg-fitness-secondary" 
          disabled={!selectedGoal}
          onClick={handleFindBuddies}
        >
          Find My Fitness Buddies
        </Button>
      </div>
    </div>
  );
};

export default GoalSelection;
