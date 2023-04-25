import Timeline from "@/components/timeline";
import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className="max-w-[1000px] w-full mx-auto pt-20 md:pt-60 duration-200 ease-in bg-white text-black dark:bg-black dark:text-white flex md:justify-center items-center p-4"
    >
      <div className="flex flex-col">
        <div className="md:text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Education
          </p>
          {/* <p className="mt-8 py-2 text-xl font-bold">09.2014 - 07.2018</p> */}
          <p className="mt-8 py-2 text-3xl font-bold">Yerevan State University</p>
          <p className="py-2 text-xl font-bold">Faculty of Informatics and Applied Mathematics</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
