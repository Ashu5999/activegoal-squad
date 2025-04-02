
import React from 'react';
import NavBar from "@/components/NavBar";
import BuddyMatchComponent from "@/components/BuddyMatch";

const BuddyMatchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <BuddyMatchComponent />
        </div>
      </div>
    </div>
  );
};

export default BuddyMatchPage;
