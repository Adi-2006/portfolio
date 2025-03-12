import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const text = `"Hi, I'm a passionate Frontend Developer dedicated to crafting beautiful, responsive, and user-friendly web experiences. With expertise in modern web technologies, I transform ideas into interactive and engaging digital solutions. My focus is on clean code, seamless performance, and intuitive design to enhance user experience. Let's build something amazing together!"`;

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const words = text.split(" ");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(words.slice(0, i + 1).join(" "));
      i++;
      if (i >= words.length) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen min-h-screen flex pt-4  pb-20  dark:bg-gray-500 text-gray-800 dark:text-zinc-200 ">
      <div className="w-10/12 relative mx-auto bg-gray-300 px-12 dark:bg-[#1e293b] text-gray-800 dark:text-white  flex xl:items-center xl:justify-between xl:flex-row flex-col items-center rounded-2xl  gap-12 py-16 ">
      
        <div className=" xl:w-[50%] w-[100%] flex items-center justify-center">
          <div className="mobile:w-[350px] mobile:h-[350px]  smobile:w-[250px] smobile:h-[250px] w-[175px] h-[175px] smobile:rounded-full  bg-blue-500 shadow-[0_0_15px_#22c55e,0_0_30px_#22c55e,0_0_50px_#22c55e] hover:animate-pulse  flex items-center justify-center relative ">
            <img
              src="./My_Img.png"
              className="mobile:w-[250px] select-none pointer-events-none mobile:h-[250px] smobile:w-[175px] smobile:h-[175px] w-[160px] h-[160px]  absolute"
            />
          </div>
        </div>
        <div className=" xl:w-[50%] w-[100%] flex flex-col items-center gap-4">
          <h2 className="font-extrabold text-4xl cursor-default dark:text-white hover:dark:[text-shadow:0_0_15px_#ffffff] transition text-center duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] ">
            Aditya Kumar Dwivedi
          </h2>
          <motion.p
            className="text-lg text-gray-800 dark:text-gray-200 max:w-[480px] hover:dark:[text-shadow:0_0_15px_#ffffff] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] sm:text-justify text-center p-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {displayedText}
          </motion.p>
          <div className="bg-gray-400 py-2 px-3 rounded-lg hover:bg-transparent hover:text-teal-500 hover:border hover:border-emerald-500 text-gray-900 font-bold">
            <a href="https://drive.google.com/file/d/1ahNWOiJaFUtUGQsQDID0S1lZkZxB2Yva/view?usp=drive_link" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
