import React, { useContext } from "react";

import { skills } from "@/mocks/skills";
import ThemeContext from "@/theme/ThemeProvider";
import Image from "next/image";
const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      name="skills"
      className="pt-[80px] w-full sm:min-h-screen duration-200 ease-in bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="md:text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">Tech stack I work with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className={`${
                  theme === "dark"
                    ? "shadow-neutral-600 shadow-sm"
                    : "shadow-md"
                } hover:scale-110 duration-500 pt-2 flex flex-col justify-evenly items-center cursor-pointer`}
              >
                <Image
                  className="mx-auto"
                  src={skill.img}
                  alt={skill}
                  width={70}
                  height={70}
                />
                <p className="my-4">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
