import { projects } from "@/mocks/projects";
import React from "react";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import ThemeContext from "@/theme/ThemeProvider";
import Image from "next/image";
const Work = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      name="work"
      className="pt-[80px] sm:pt-[120px] w-full md:min-h-screen  duration-200 ease-in bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="max-w-[1000px] sm:pt-4 mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Here are the best of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className={`bg-white ${
                  theme === "dark"
                    ? "shadow-neutral-800 shadow-md"
                    : "shadow-lg"
                }  rounded-lg sm:max-w-xs text-black-main`}
              >
                <a rel="noreferrer" target="_blank" href={project.live}>
                  <div className="overflow-hidden rounded-t-lg cursor-pointer">
                    <Image
                      src={project.img}
                      layout="responsive"
                      width={300}
                      height={160}
                      alt={`${project.name}`}
                      className="rounded-t-lg object-cover w-full sm:h-40 hover:scale-125 ease-in duration-500"
                    />
                  </div>
                </a>
                <div className="p-6">
                  <h2 className="font-bold mb-2 text-2xl ">{project.name}</h2>
                  <div className="flex gap-2 flex-col">
                    <p className="text-sm font-medium mb-1">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => {
                        return (
                          <span
                            key={idx}
                            className="px-3 h-5 duration-150 ease-in 
                          hover:bg-black cursor-pointer 
                          py-0.5 text-xs font-semibold rounded-xl
                           bg-gray-bold text-white"
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex gap-2 mt-3">
                      {project.github && (
                        <a
                          className="hover:scale-110 ease-in duration-300"
                          rel="noreferrer"
                          target="_blank"
                          href={project.github}
                        >
                          <FaGithub fontSize={22} />
                        </a>
                      )}
                      <a
                        className="hover:scale-110 ease-in duration-300"
                        rel="noreferrer"
                        target="_blank"
                        href={project.live}
                      >
                        <TiWorld fontSize={25} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
