
import NavBar from "@/components/NavBar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Plus, Target } from "lucide-react";
import GoalSelection from "@/components/GoalSelection";

const Goals = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Fitness Goals</h1>
          <p className="text-muted-foreground">Track your progress and stay motivated</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Current Goals</h2>
            
            {/* Current Goals */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-fitness-primary" />
                  <h3 className="font-medium">Weight Loss</h3>
                </div>
                <Badge className="bg-amber-500">In Progress</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-sm text-muted-foreground">Goal: Lose 10 pounds by June 30th</p>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm">Update Progress</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-fitness-primary" />
                  <h3 className="font-medium">Run 5K</h3>
                </div>
                <Badge className="bg-green-500">Completed</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 size={16} />
                    <p className="text-sm">Completed on May 15th</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center">
              <Button className="gap-2">
                <Plus size={16} />
                Add New Goal
              </Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6">Set a New Goal</h2>
            <Card className="p-4">
              <GoalSelection />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <span className={`px-2 py-1 rounded-full text-xs text-white font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Goals;
