import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function About() {
  const divRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      divRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.3, ease: "power2.out",  }
    );
  }, []);

  return (
    // main Content
    <div className="h-auto bg-zinc-300 min-h-screen pt-4 w-screen dark:bg-gray-500 pb-20">
      {/* 80% width box */}
      <div className="relative w-10/12 dark:bg-[#314565] rounded-2xl bg-[#d5d0be] shadow-[0_35px_35px_rgba(0,0,0,0.8)] dark:text-white text-gray-900 mx-auto flex flex-col justify-between  items-center py-12 gap-6  ">
        {/* img+about div */}
        <div
          ref={(element) => (divRefs.current[0] = element)}
          className="flex lg:flex-row flex-col items-center lg:gap-0 gap-8 justify-between xl:justify-evenly w-11/12 mx-auto"
        >
          {/* Img div */}
          <div
            ref={(element) => (divRefs.current[1] = element)}
            className="lg:w-[35%] max-w-[500px] w-[200px] xsmobile:h-[275px] bg-blue-500 rounded-4xl relative flex items-center justify-center hover:shadow-[0_0_15px_#22c55e,0_0_30px_#22c55e,0_0_50px_#22c55e] xsmobile:w-[250px] h-[250px] active:shadow-[0_0_15px_#22c55e,0_0_30px_#22c55e,0_0_50px_#22c55e]"
          >
            <img
              src="./My_Img.png"
             
              className="absolute select-none pointer-events-none xsmobile:w-[200px] w-[175px]"
              alt="My Profile Photo"
            />
          </div>
          {/* about*/}
          <div
            ref={(element) => (divRefs.current[2] = element)}
            className="w-[full] relative"
          >
            {/* About */}
            <div className="flex flex-col gap-4 max-w-[500px]  cursor-default">
              {/* About me Heading */}
              <div
                ref={(element) => (divRefs.current[3] = element)}
                className="group flex items-center w-[200px] justify-center mx-auto flex-col gap-2 "
              >
                <h2 className="text-4xl font-bold group-hover:dark:[text-shadow:0_0_15px_#ffffff] transition text-center duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151]">About Me</h2>
                <div className="w-8 h-1 group-hover:bg-orange-500 bg-green-500"></div>
              </div>
              {/* about me Ul */}
              <ul
                ref={(element) => (divRefs.current[4] = element)}
                className="flex flex-col items-start md:gap-4 gap-8 "
              >
              {/* li-1 */}
                <li
                  ref={(element) => (divRefs.current[5] = element)}
                  className="flex items-center gap-4 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]"
                >
                  <div className=" w-[30px] transform scale-150">👋</div>{" "}
                  <p className="text-lg">
                    Hi, I'm <strong>Aditya Kumar Dwivedi</strong> from Patna,
                    Bihar.
                  </p>
                </li>
                {/* li-2 */}
                <li
                  ref={(element) => (divRefs.current[6] = element)}
                  className="flex items-center gap-4 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]"
                >
                  <div className="w-[30px] transform scale-150">🚀</div>{" "}
                  <p className="text-lg">
                    An <strong>aspiring Frontend Developer</strong> passionate
                    about crafting user-friendly, high-performance web
                    applications.
                  </p>
                </li>
                {/* li-3 */}
                <li
                  ref={(element) => (divRefs.current[7] = element)}
                  className="flex items-center gap-4 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]"
                >
                  <span className="w-[30px] transform scale-150">💡</span>
                  <p className="text-lg">
                    {" "}
                    Skilled in{" "}
                    <strong>
                      React.js, Context API, Tailwind CSS, and Java
                    </strong>
                    , with a deep understanding of{" "}
                    <strong>Data Structures & Algorithms (DSA)</strong>.
                  </p>
                </li>
                {/* li-4 */}
                <li
                  ref={(element) => (divRefs.current[8] = element)}
                  className="flex items-center gap-4 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]"
                >
                  <div className="w-[30px] transform scale-150">🔥</div>
                  <p className="text-lg">
                    {" "}
                    Enthusiastic about{" "}
                    <strong>
                      frontend development, UI/UX, and optimizing web
                      performance
                    </strong>{" "}
                    for a seamless user experience.
                  </p>
                </li>
                {/* li-5 */}
                <li
                  ref={(element) => (divRefs.current[9] = element)}
                  className="flex items-center gap-4 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]"
                >
                  <div className="w-[30px] transform scale-150">🎯</div>
                  <p className="text-lg">
                    {" "}
                    Actively improving **DSA skills** by solving problems on
                    platforms like **LeetCode and Gfg**.
                  </p>
                </li>
                {/* li-6 */}
                <li
                  ref={(element) => (divRefs.current[10] = element)}
                  className="flex items-center gap-4 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]"
                >
                  <div className="w-[30px] transform scale-150">🤝</div>{" "}
                  <p className="text-lg">
                    Seeking opportunities to apply my skills, contribute to
                    innovative projects, and grow as a professional in the
                    **software development industry**.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Education Section */}
        <div className="flex flex-col items-center justify-center w-10/12 mx-auto" ref={(element) => (divRefs.current[11] = element)}>
        {/* Education Heading */}
          <div className="flex items-center justify-center flex-col gap-2 group mb-4">
            <h2 className="text-4xl font-bold group-hover:dark:[text-shadow:0_0_15px_#ffffff] transition text-center duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151]">Education</h2>
            <div className="w-8 h-1 bg-green-500 group-hover:bg-orange-500"></div>
          </div>
          {/* Education Ul  */}
          <ul ref={(element) => (divRefs.current[12] = element)} className=" flex lg:flex-row flex-col lg:items-start items-center justify-center lg:gap-0 gap-4 lg:justify-evenly">
            {/* BCA */}
            <li ref={(element) => (divRefs.current[13] = element)} className="flex flex-col items-center justify-center gap-4 lg:w-[33%] w-full ">
              <h2 className="text-xl font-bold hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">Graduation</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    🎓
                  </div>
                  <p>
                    {" "}
                    <strong>
                      Pursuing Bachelor of Computer Applications (BCA)
                    </strong>
                  </p>
                </div>
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] ">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    📍
                  </div>
                  <p>
                    Patliputra University, Patna | <strong>2023-2026</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] ">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    📚
                  </div>
                  <p>
                    Scored <strong>72%</strong> in First Year Final Examination.
                  </p>
                </div>
              </div>
            </li>

            {/* 12th */}
            <li ref={(element) => (divRefs.current[14] = element)} className="flex flex-col items-center gap-4 justify-center lg:w-[31%] w-full">
              <h2 className="text-xl font-bold hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">Class-12</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    🎓
                  </div>
                  <p>
                    {" "}
                    <strong>
                      Higher Secondary Education (Class 12) - State Board
                    </strong>
                  </p>
                </div>
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    📍
                  </div>
                  <p>
                    Zila School, Chhapra | <strong>2023</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    📚
                  </div>
                  <p>
                    Scored <strong>67.8%</strong> in Class 12 Final Exams.
                  </p>
                </div>
              </div>
            </li>

            {/* 10th */}
            <li ref={(element) => (divRefs.current[15] = element)} className="flex flex-col  gap-4 justify-center lg:w-[33%] w-full">
              <h2 className="font-bold text-xl text-center hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">Class-10</h2>
              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    🎓
                  </div>
                  <p>
                    <strong>Secondary Education (Class 10) - CBSE</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    📍
                  </div>
                  <p>
                    S S Vidya Mandir, Chhapra | <strong>2021</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3 hover:dark:[text-shadow:0_0_15px_#ffffff] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  <div className="scale-150 w-[30px] flex items-center justify-center">
                    📚
                  </div>
                  <p>
                    Scored <strong>73.8%</strong> in Class 10 Board Exams.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
