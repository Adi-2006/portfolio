import React, { useRef,useEffect } from "react";
import {gsap} from "gsap";

function Skills() {

   const divRefs = useRef([]);
  
    useEffect(() => {
      gsap.fromTo(
        divRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 1, ease: "power2.out",  }
      );
    }, []);

  return (
    <div className="dark:bg-zinc-500 pt-4  bg-zinc-300 pb-20 w-screen h-auto min-h-screen relative">
      {/* 80%Box */}
      <div  className="w-10/12 h-auto min-h-screen bg-[#f1ceb1] rounded-2xl dark:text-white dark:bg-[#212c3f] cursor-default mx-auto relative">
        {/* Skill Detilas BOx */}
        <div ref={(element) => (divRefs.current[0] = element)} className="flex flex-col w-full gap-4 items-center justify-center py-4 pb-16  px-8">
          {/* Heading div */}
          <div ref={(element) => (divRefs.current[1] = element)} className=" group flex flex-col items-center gap-4">
            <h2 className="mobile:text-4xl text-center font-extrabold text-2xl select-none group-hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
              Skills & Expertise
            </h2>
            {/* green design */}
            <div className="bg-green-500 w-12 h-1 group-hover:bg-orange-500  active:bg-orange-500"></div>
          </div>
          {/* Contents  */}
          <div ref={(element) => (divRefs.current[2] = element)}  className=" gridCont grid rounded-2xl smobile:w-[90%]  xll:grid-cols-3  lg:grid-cols-[repeat(2,minmax(0,1fr))] grid-cols-[repeat(1,minmax(0,1fr))] pb-8 px-4  b items-start lg:gap-4 gap-6 border-t-2 shadow-[0_35px_35px_rgba(0,0,0,0.8)]">
            {/* FrontEnd */}
            <div ref={(element) => (divRefs.current[3] = element)} className="flex flex-col items-center lg:my-2 my-3 py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)]  justify-center gap-6 lg:h-[350px] ">
              <h2 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                FrontEnd Development
              </h2>



              {/* Frontend Skills */}
              <div className="flex flex-col  items-start justify-start lg:w-[90%]    mx-auto text-wrap gap-4 flex-wrap lg:max-h-[200px]">
                {/* React js */}
                <div className="flex items-center justify-center gap-3">
                  {/* Img cont */}
                  <div className="relative flex items-center justify-center w-[35px]  h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./Rbg.png"
                      width={"28px"}
                      alt="React"
                      loading="lazy"
                      className="absolute"
                    />
                  </div>
                  <h3 className="text-xl font-medium hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    React Js
                  </h3>
                </div>
                {/* Js */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px]  h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./js.png"
                      width={"25px"}
                      className="absolute"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    JavaScript
                  </h3>
                </div>
                {/* Html */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px]  h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./htmlbg.png"
                      width={"20px"}
                      className="absolute"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    HTML 5
                  </h3>
                </div>
                {/* CSS */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px]  h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./css.png"
                      width={"28px"}
                      className="absolute"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    CSS{" "}
                  </h3>
                </div>
                {/* Tailwind */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./Tail.png"
                      className="absolute w-[28px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    TailWind Css
                  </h3>
                </div>
                {/* routing Navigations */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./rr.png"
                      className="w-[28px] absolute"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    React-Router
                  </h3>
                </div>
                {/* other Ui Enhancemnet */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./gsap.png"
                      className="absolute w-[22px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    GSAP{" "}
                  </h3>
                </div>
              </div>
            </div>




            {/* Programming Language */}
            <div ref={(element) => (divRefs.current[4] = element)} className="flex flex-col shadow-[0_10px_10px_rgba(0,0,0,0.6)] lg:h-[350px]   py-4   items-center lg:my-2 my:3 justify-center gap-6  ">
              <h2 className="text-center  mx-auto  text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Programming Language
              </h2>
              {/* Pro.lan. list div */}
              <div className="flex flex-col items-start justify-start    mx-auto text-wrap gap-4 flex-wrap ">
                {/* JS */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./js.png"
                      className="absolute w-[22px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-wrap hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    JavaScript
                  </h3>
                </div>
                {/* Java */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./java.png"
                      className="absolute w-[28px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-wrap hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Java
                  </h3>
                </div>
              </div>
            </div>



            {/* DSA */}
            <div ref={(element) => (divRefs.current[5] = element)} className="flex flex-col  items-center lg:my-2 my:3 lg:h-[400px]  py-4  shadow-[0_10px_10px_rgba(0,0,0,0.6)]    justify-center gap-4 lg:max-h-[350px]">
              <h2 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Data Structure & Algorithms
              </h2>



              {/* Core Concept +algo */}
              <div className="flex sm:flex-row flex-col sm:items-start justify-between sm:gap-8 gap-4">
                {/* core concept */}
                <div className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-center mx-auto text-xl font-semibold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Core Concepts
                  </h3>
                  <ul className="flex flex-col gap-2 w-[90%] mx-auto items-center justify-center">
                    <li className="text-xl  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                      Arrays
                    </li>
                    <li className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                      Strings
                    </li>
                    <li className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                      Linked List
                    </li>
                  </ul>
                </div>
                {/* Algorithms */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <h3 className="text-center mx-auto text-xl font-semibold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Algorithms
                  </h3>
                  <ul className="flex flex-col  gap-2  mx-auto items-center justify-center">
                    <li className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                      Sorting
                    </li>
                    <li className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                      Searching
                    </li>
                    <li className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                      Two Pointer
                    </li>
                  </ul>
                </div>
              </div>
              {/* leetcode link */}
              <div className="mx-auto group text-xl dark:hover:text-blue-500 hover:text-blue-800">
                <a href="https://leetcode.com/u/Aditya__Dwivedi/" target="_blank">
                  LeetCode Profile
                </a>
              </div>
            </div>
            {/* Version Ctlr & Hoisting  */}
            <div ref={(element) => (divRefs.current[6] = element)} className="flex flex-col items-center lg:my-2 my:3   py-4  shadow-[0_10px_10px_rgba(0,0,0,0.6)]   justify-center  gap-6 lg:h-[350px]">
              <h2 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Version Control & Deployment
              </h2>
              <div className="flex flex-col items-start gap-3">
                {/* GitHub */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./github.png"
                      className="absolute w-[25px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    GitHub Pages
                  </h3>
                </div>
                {/* Vercel */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./vercel.png"
                      className="absolute w-[200px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Vercel
                  </h3>
                </div>
                {/* Netlify */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./netlify.png"
                      className="absolute w-[22px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Netlify
                  </h3>
                </div>
                {/* Github Pages */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./github.png"
                      className="absolute w-[22px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    GitHub{" "}
                  </h3>
                </div>
              </div>
            </div>
            {/* dev Tools */}
            <div ref={(element) => (divRefs.current[7] = element)} className="flex flex-col items-center lg:my-2 my:3 lg:h-[400px]  py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)]  justify-center  gap-6 lg:max-h-[350px]">
              <h2 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Development Tools{" "}
              </h2>
              <div className="flex items-start mx-auto mobile:w-auto xsmobile:w-[82%]  flex-col gap-3">
                {/* vs Code */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./vs.png"
                      className="absolute w-[22px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    VS Code
                  </h3>
                </div>
                {/* intelijIdea */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./ij.png"
                      className="absolute w-[30px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    InteliiJ Idea
                  </h3>
                </div>
                {/* Chrome Dev */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-600 ">
                    <img
                      src="./cdt.png"
                      className="absolute w-[30px]"
                      alt="React"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Chrome DevTools
                  </h3>
                </div>
              </div>
            </div>
            {/* soft skills & Strength */}
            <div ref={(element) => (divRefs.current[8] = element)} className="flex flex-col items-center lg:my-2 my:3 lg:h-[400px] py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)] justify-center gap-6  lg:max-h-[350px]">
              <h2 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Soft Skills & Strengths
              </h2>
              {/* <div></div> */}
              <div className="flex flex-col items-start mobile:w-auto xsmobile:w-[82%] mx-auto justify-center gap-3">
                {/* problm solving */}
                <div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    {" "}
                    Problem-Solving & Logical Thinking{" "}
                  </h3>
                </div>
                {/* collab */}
                <div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Collaboration & Teamwork
                  </h3>
                </div>
                {/* debug */}
                <div>
                  <h3 className="text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                    Debugging & Code Optimization
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
