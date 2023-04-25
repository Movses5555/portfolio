import Timeline from "@/components/timeline";
import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full pt-20 md:pt-60 duration-200 ease-in bg-white text-black  dark:bg-black dark:text-white flex justify-center items-center p-4"
    >
      <div className="flex flex-col">
        <div className="md:text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experience
          </p>
          <p className="py-6">My experience in the web industry</p>
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;
