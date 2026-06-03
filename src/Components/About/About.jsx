import React from "react";
import profilePic from "./profile_pic.jpeg";
import { FaLaptopCode } from "react-icons/fa";
import TechStack from "./tech_stack";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-green-400 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div
  className="
 bg-white/5
  border
  border-green-500/20
  rounded-3xl
  p-8
  backdrop-blur-xl
  shadow-lg
  shadow-green-500/10
  animate-float
  hover:-translate-y-2
  hover:shadow-green-500/30
  hover:scale-[1.02]
  active:scale-95
  transition-all
  duration-300
  "
>
  <h3 className="text-3xl font-bold mb-6 text-green-400">
    Building Software & AI Solutions
  </h3>

  <p className="text-gray-300 text-lg leading-8 font-medium">
    I am a third-year B.Tech student pursuing Computer Science
    and Engineering (CSE-Core) at VIT Bhopal University.
    Currently in my sixth semester, I am passionate about
    software development, problem solving, and emerging AI technologies.
  </p>

  <p className="text-gray-300 text-lg leading-8 font-medium">
    My technical expertise includes C++, Java, React,
    Node.js, Express, JavaScript, HTML, and CSS.
    I also actively explore Generative AI and Agentic AI
    to build intelligent applications.
  </p>

  <p className="text-gray-300 text-lg leading-8 font-medium">
    I completed a two-month virtual internship at
    SmartBridge, where I gained practical industry
    experience and worked on real-world projects.
  </p>

  <p className="text-gray-300 text-lg leading-8 font-medium">
    With a strong foundation in software engineering
    and AI, I enjoy building scalable applications,
    contributing to open-source projects, and continuously
    learning new technologies.
  </p>
</div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
  src={profilePic}
  alt="Raghav Gupta"
  className="
  w-80
  h-80
  rounded-3xl
  object-cover
  border-2
  border-green-500
  animate-float
  hover:scale-105
  transition-all
  duration-300
  "
/>

          </div>
        </div>

        <div className="mt-16 w-full">
          <TechStack />
        </div>

      </div>
    </section>
  );
};

export default About;