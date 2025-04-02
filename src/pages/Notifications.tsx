
import NavBar from "@/components/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, ThumbsUp, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface NotificationProps {
  type: 'like' | 'comment' | 'request' | 'goal';
  user: {
    name: string;
    image?: string;
  };
  time: string;
  content: string;
  read?: boolean;
}

const notifications: NotificationProps[] = [
  {
    type: 'like',
    user: {
      name: 'Jessica Lee',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    time: '5 min ago',
    content: 'liked your workout.',
  },
  {
    type: 'comment',
    user: {
      name: 'David Kim',
      image: 'https://i.pravatar.cc/150?img=12'
    },
    time: '30 min ago',
    content: 'commented on your workout: "Great progress! Keep it up!"',
  },
  {
    type: 'request',
    user: {
      name: 'Maria Garcia',
      image: 'https://i.pravatar.cc/150?img=9'
    },
    time: '1 hour ago',
    content: 'sent you a buddy request.',
  },
  {
    type: 'goal',
    user: {
      name: 'System',
      image: undefined
    },
    time: '3 hours ago',
    content: 'You\'re making great progress on your weight loss goal! 65% complete.',
    read: true
  },
];

const NotificationItem = ({ type, user, time, content, read }: NotificationProps) => {
  const getIcon = () => {
    switch (type) {
      case 'like': return <ThumbsUp size={16} className="text-fitness-primary" />;
      case 'comment': return <MessageSquare size={16} className="text-fitness-primary" />;
      case 'request': return <UserPlus size={16} className="text-fitness-primary" />;
      case 'goal': return <Check size={16} className="text-fitness-primary" />;
    }
  };
  
  return (
    <div className={`p-4 ${!read ? 'bg-fitness-primary/5' : ''}`}>
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.image} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{user.name}</span>
                {getIcon()}
              </div>
              <p className="text-sm text-muted-foreground">{content}</p>
            </div>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          
          {type === 'request' && (
            <div className="flex gap-2 mt-2">
              <Button size="sm" className="bg-fitness-primary hover:bg-fitness-secondary">Accept</Button>
              <Button size="sm" variant="outline">Decline</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your fitness buddies</p>
          </div>
          <Button variant="outline">Mark All as Read</Button>
        </div>
        
        <Card>
          <CardContent className="p-0 divide-y">
            {notifications.map((notification, index) => (
              <React.Fragment key={index}>
                <NotificationItem {...notification} />
                {index < notifications.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
