
import React from 'react';
import NavBar from "@/components/NavBar";
import BuddyMatchComponent from "@/components/BuddyMatch";
import HelpBot from "@/components/HelpBot";

const BuddyMatchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 font-poppins">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-montserrat font-bold mb-8 text-center text-gray-800 dark:text-white">
          Find Your Perfect <span className="text-fitness-primary">Workout Buddy</span>
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-200 dark:border-purple-900">
          <BuddyMatchComponent />
        </div>
      </div>
      
      {/* Help Bot */}
      <HelpBot />
    </div>
  );
};

export default BuddyMatchPage;
