
import React from 'react';
import NavBar from "@/components/NavBar";
import BuddyMatchComponent from "@/components/BuddyMatch";

const BuddyMatchPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <BuddyMatchComponent />
      </div>
    </div>
  );
};

export default BuddyMatchPage;
