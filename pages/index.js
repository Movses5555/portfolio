import Navbar from "@/components/navbar";
import HomePage from "@/components/homepage";
import About from "@/components/about";
import Skills from "@/components/skills";
import Work from "@/components/work";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { useEffect } from "react";
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    document
      .getElementById("__next")
      .classList.add("bg-white", "dark:bg-black");
  }, []);

  return (
    <div className="h-full">
      <Head>
        <title>Movses Israyelyan | Web Developer</title>
      </Head>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Work />
      <Education />
      <Experience />
    </div>
  );
}
