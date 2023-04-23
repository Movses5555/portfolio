import React from "react";
import { FaBuilding } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "@/theme/ThemeProvider";
import { MdOutlineWork } from "react-icons/md";
import { experience } from "@/mocks/experience";
function Timeline() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="timeline-items max-w-xl mx-auto flex-wrap flex relative">
        {experience.map((item, idx) => {
          return (
            <div key={item.id} className="timeline-item mb-10 w-full relative">
              <div className="timeline-dot w-6 h-6 bg-pink-500 shadow-md border-[3px] border-white absolute rounded-1/2 top-8"
              ></div>
              <div
                className={`timeline-date ${
                  theme === "dark" ? "!text-white" : "text-pink-500"
                } text-lg mb-4 mt-6 font-semibold`}
              >
                {item.date}
              </div>
              <div className="p-4">
                <h3 className="text-xl mb-4 font-medium">{item.title}</h3>
                <div className="flex flex-col gap-2">
                  <div
                    className={`flex items-center gap-2 ${
                      idx % 2 !== 0 ? "" : "md:justify-end"
                    } justify-start`}
                  >
                    <FaBuilding />
                    <p>{item.company} </p>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${
                      idx % 2 !== 0 ? "" : "md:justify-end"
                    } justify-start`}
                  >
                    <MdOutlineWork />
                    <p>{item.type}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;
