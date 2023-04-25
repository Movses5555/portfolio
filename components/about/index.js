import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full duration-200 ease-in bg-white text-black sm:h-screen dark:bg-black dark:text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Thanks for visiting my website.Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a passionate front-end developer with over 3 years of
              experience building interactive web applications with React.js and
              making reusable components and responsive user interfaces in the
              web industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
