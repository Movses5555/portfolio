import React, { useState, useContext } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-scroll";
import ThemeContext from "@/theme/ThemeProvider";
import AnimatedLetters from "@/components/animated-letters";
import { useEffect } from "react";
import { SiGmail } from "react-icons/si";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  const [letterClass, setLetterClass] = useState("text-animate");
  const greet = ["H", "i", ",", "m", "y", "", "n", "a", "m", "e", "", "i", "s"];
  const name = ["M", "o", "v", "s", "e", "s", " ", "I", "s", "r", "a", "y", "e", "l", "y", "a", "n"];
  const profession = ["a", "", "f", "r", "o", "n", "t", "e", "n", "d", "", "d", "e", "v", "e", "l", "o", "p", "e", "r"];

  useEffect(() => {
    let timer = setTimeout(() => setLetterClass("text-animate-hover"), 4000);
    setMounted(true);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      name="home"
      className="w-full duration-200 ease-in h-screen dark:bg-black dark:text-white bg-white text-black"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <h4 className="text-lg leading-10">
          <AnimatedLetters
            letters={greet}
            classNames={`${letterClass} greeting cursor-pointer`}
            idx={1}
          />
        </h4>
        <h1 className="text-4xl cursor-pointer leading-[3.5rem] sm:text-5xl lg:text-7xl font-bold text-[#ccd6f6]">
          <AnimatedLetters letters={name} classNames={letterClass} idx={15} />
        </h1>
        <h2 className="text-4xl hover-h2 cursor-pointer leading-10 sm:text-5xl lg:text-7xl font-bold text-[#8892b0]">
          <span className={`${letterClass} _19`}>I</span>
          <span className={`${letterClass} _20`}>&apos;m</span>{" "}
          <AnimatedLetters
            letters={profession}
            classNames={letterClass}
            idx={21}
          />
        </h2>
        <div className="flex gap-2 my-5">
          <div className="social-links flex gap-4">
            <a
              className="inline-block"
              href="https://github.com/Movses5555"
              target="blank"
            >
              <FaGithub fontSize={28} />
            </a>
            <a
              className="inline-block"
              href="https://www.linkedin.com/in/movses-israyelyan-383792189/"
              target="blank"
            >
              <FaLinkedin fontSize={28} />
            </a>
            <a
              className="inline-block"
              href="https://t.me/Movses5555"
              target="blank"
            >
              <FaTelegram fontSize={28} />
            </a>
            <a
              className="inline-block"
              target="blank"
              href="mailto:mosisrayelyan@gmail.com"
            >
              <SiGmail fontSize={28} />
            </a>
          </div>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row gap-0 sm:gap-2">
          <div>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className={`cursor-pointer w-40 group border font-medium
                px-6 py-3 my-2 flex duration-150 ease-in justify-between items-center ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black border-white"
                  : "hover:bg-[#ff3298] hover:border-[#ff3298] hover:text-white border-gray-jo"
              } `}
            >
              My Works
              <div className="group-hover:rotate-90 duration-300">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
