
import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const NavBar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-fitness-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-fitness-primary">ActiveGoal</span>
              <span className="ml-1 text-2xl font-bold text-fitness-secondary">Squad</span>
            </div>
          </div>

          {!isMobile ? (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-fitness-primary ring-2 ring-white"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <User size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Goals</DropdownMenuItem>
                  <DropdownMenuItem>Friends</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center">
              <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu size={24} />
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {isMobile && mobileMenuOpen && (
        <div className="bg-white dark:bg-fitness-dark border-b border-gray-200 dark:border-gray-800 px-4 py-3 space-y-3">
          <Button variant="ghost" className="w-full justify-start">Profile</Button>
          <Button variant="ghost" className="w-full justify-start">Goals</Button>
          <Button variant="ghost" className="w-full justify-start">Friends</Button>
          <Button variant="ghost" className="w-full justify-start">Settings</Button>
          <Button variant="ghost" className="w-full justify-start">Notifications</Button>
          <Button variant="ghost" className="w-full justify-start">Sign out</Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
