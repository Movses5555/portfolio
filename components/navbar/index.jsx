import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import ThemeContext from "@/theme/ThemeProvider";
import { navigation } from "@/mocks/navigation";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [shadow, setShadow] = useState(false);

  const { theme, toggle } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleScroll = () => {
    if (window.scrollY >= 80) setShadow(true);
    else setShadow(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed gap-8 ${
        shadow ? "shadow" : ""
      } justify-between duration-200 ease-in w-full h-16 flex md:justify-end
     items-center px-4 bg-white text-black dark:bg-black dark:text-white z-50`}
    >
      <ul className="hidden md:flex">
        {navigation.map((item) => {
          return (
            <li key={item.id} className="px-4">
              <Link
                activeClass={`border-b-2 pb-2 ${
                  theme === "light" ? "border-black" : "border-white"
                } `}
                spy
                to={item.name}
                className="font-medium cursor-pointer"
                smooth={true}
                duration={500}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer text-black dark:text-white duration-300 ease-in"
        onClick={toggle}
      >
        {mounted &&
          (theme === "light" ? (
            <FaSun color="inherit" fontSize={24} />
          ) : (
            <FaMoon color="inherit" fontSize={24} />
          ))}
      </div>

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen ${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }
             flex flex-col justify-center items-center`
        }
      >
        {navigation.map((link) => {
          return (
            <li key={link.id} className="py-4 text-xl font-medium">
              <Link
                className="cursor-pointer"
                onClick={handleClick}
                to={link.name}
                smooth={true}
                duration={500}
              >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
