import React,{useEffect,useRef} from "react";
import {gsap} from "gsap";


function Projects() {

  const divRefs = useRef([]);
    
      useEffect(() => {
        gsap.fromTo(
          divRefs.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 1, ease: "power2.out",  }
        );
      }, []);

  return (
    <>
      {/* div Full Height width */}
      <div className="w-screen pt-4 h-auto min-h-screen relative pb-20 bg-zinc-300 dark:bg-zinc-500 dark:text-white">
        {/* 80%div */}
        <div ref={(element) => (divRefs.current[0] = element)} className="w-10/12 mx-auto rounded-2xl  py-4 pb-16 bg-[#bca9b9] dark:bg-[#314565] flex flex-col gap-2 items-center justify-center">
          {/* heading and green light div */}
          <div ref={(element) => (divRefs.current[1] = element)} className="group flex flex-col items-center gap-4">
            <h2 className="mobile:text-4xl text-center font-extrabold text-2xl select-none group-hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
              Projects
            </h2>
            <div className="bg-green-500 w-12 h-1 group-hover:bg-orange-500 active:bg-orange-500"></div>
          </div>
          {/* grid for divs */}
          <div ref={(element) => (divRefs.current[3] = element)} className="grid smobile:w-[90%] rounded-2xl place-items-center  xll:grid-cols-3 my-4 py-2 lg:grid-cols-[repeat(2,minmax(0,1fr))] grid-cols-[repeat(1,minmax(0,1fr))] pb-8 px-4  b items-start lg:gap-4 gap-6 border-t-2 shadow-[0_10px_10px_rgba(0,0,0,0.6)]">



            {/* Project 1: Expense Tracker*/}

            <div  ref={(element) => (divRefs.current[4] = element)}  className="w-[100%]  rounded-2xl flex flex-col dark:bg-gray-800 items-center lg:my-2 my-3 py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)] justify-center gap-6 lg:min-h-[350px] px-3 h-auto">
              {/* Title */}
              <h3 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Expense Tracker
              </h3>
              {/* Image Section */}
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src="./expenseTracker.PNG"
                  className=" w-[80%]   rounded-lg"
                  alt="Expense Tracker"
                />
              
              </div>
              {/* Live Link */}
              <div className="mx-auto group text-xl dark:hover:text-blue-500 hover:text-blue-800">
                <a
                  href="https://adi-2006.github.io/expense_tracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo 🔗
                </a>
              </div>
              {/* Description & Features */}
              <div className="text-center px-4  ">
                <p className="text-gray-900 max-w-[600px] hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] dark:text-gray-300">
                A simple yet powerful Expense Tracker that helps users manage finances effectively. Supports adding and deleting expenses with local storage for data persistence.
                </p>
                <div className="w-[80%] mx-auto flex items-center justify-center">
                <ul className="mt-4 text-gray-900 text-start dark:text-gray-300  list-disc pl-5   list-outside">
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  ✅ Add & Delete Expenses</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">💰 Total Expense Display</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">💾 Persistent Storage (Local Storage)</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">⚡ Built using Redux Toolkit for state management</li>
                </ul>
                </div>
              </div>
              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap justify-center items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]  bg-gray-200 dark:bg-gray-900 rounded">
                  React
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Redux Toolkit
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  JavaScript
                </span>

                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900  rounded">
                  Local Storage
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900  rounded">
                  HTML
                </span>
              </div>
            </div>





            {/* Pr-2 Notes App */}
            <div ref={(element) => (divRefs.current[5] = element)}  className="w-[100%]  rounded-2xl flex flex-col dark:bg-gray-800 items-center lg:my-2 my-3 py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)] justify-center gap-6 lg:min-h-[350px] px-3 h-auto">
              {/* Title */}
              <h3 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Notes App
              </h3>
              {/* Image Section */}
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src="./notesdark.PNG"
                  className="hidden dark:block w-[80%]   rounded-lg"
                  alt="Todo App Dark Mode"
                />
                <img
                  src="./notesday.PNG"
                  className="block dark:hidden w-[80%] rounded-lg"
                  alt="Todo App Light Mode"
                />
              </div>
              {/* Live Link */}
              <div className="mx-auto group text-xl dark:hover:text-blue-500 hover:text-blue-800">
                <a
                  href="https://adi-2006.github.io/notesApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo 🔗
                </a>
              </div>
              {/* Description & Features */}
              <div className="text-center px-4 ">
                <p className="text-gray-900 max-w-[600px] hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] dark:text-gray-300">
                A simple yet powerful Notes App to efficiently manage important notes. Supports adding, editing, and deleting notes with a smooth dark mode for a better user experience.
                </p>
                <div className="w-[80%] mx-auto flex items-center justify-center">
                <ul className="mt-4 text-gray-900 text-start dark:text-gray-300  list-disc pl-5  list-outside">
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  ✅ Add, Edit & Delete Notes</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">🌙 Theme Switcher (Light/Dark Mode)</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">💾 Persistent Storage (Local Storage)</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">⚡ Built using Context API for state management</li>
                </ul>
                </div>
              </div>
              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap justify-center items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                <span className="px-2 py-1    hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  React
                </span>
                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Context API
                </span>
                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  JavaScript
                </span>

                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Local Storage
                </span>
                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  HTML
                </span>
              </div>
            </div>




            {/* pr-3  Todo App */}
            <div  ref={(element) => (divRefs.current[6] = element)} className="w-[100%]  rounded-2xl flex flex-col dark:bg-gray-800 items-center lg:my-2 my-3 py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)] justify-center gap-6 lg:min-h-[350px] px-3 h-auto">
              {/* Title */}
              <h3 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Todo App
              </h3>
              {/* Image Section */}
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src="./todoImg.PNG"
                  className="hidden dark:block w-[80%]   rounded-lg"
                  alt="Todo App Dark Mode"
                />
                <img
                  src="./lighttodo.PNG"
                  className="block dark:hidden w-[80%] rounded-lg"
                  alt="Todo App Light Mode"
                />
              </div>
              {/* Live Link */}
              <div className="mx-auto group text-xl dark:hover:text-blue-500 hover:text-blue-800">
                <a
                  href="https://adi-2006.github.io/todo-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo 🔗
                </a>
              </div>
              {/* Description & Features */}
              <div className="text-center px-4 ">
                <p className="text-gray-900 max-w-[600px] hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] dark:text-gray-300">
                A simple yet powerful Todo App to efficiently manage daily tasks. Supports adding, editing, and deleting todos with a smooth dark mode for a better user experience.
                </p>
                <div className="w-[80%] mx-auto flex items-center justify-center">
                <ul className="mt-4 text-gray-900 text-start dark:text-gray-300  list-disc pl-5  list-outside">
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  ✅ Add, Edit & Delete Todos</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">🌙 Theme Switcher (Light/Dark Mode)</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">💾 Persistent Storage (Local Storage)</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">⚡ Built using Context API for state management</li>
                </ul>
                </div>
              </div>
              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap justify-center items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                <span className="px-2 py-1    hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  React
                </span>
                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Context API
                </span>
                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  JavaScript
                </span>

                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Local Storage
                </span>
                <span className="px-2 py-1   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  HTML
                </span>
              </div>
            </div>




            {/* pr-4 ChatBot */}
            <div ref={(element) => (divRefs.current[7] = element)}  className="w-[100%]  rounded-2xl flex flex-col dark:bg-gray-800 items-center lg:my-2 my-3 py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)] justify-center gap-6 lg:min-h-[350px] px-3 h-auto">
              {/* Title */}
              <h3 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Chat Bot
              </h3>
              {/* Image Section */}
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src="./chatbot.PNG"
                  className="w-[80%]   rounded-lg"
                  alt="ChatBot"
                />
                
              </div>
              {/* Live Link */}
              <div className="mx-auto group text-xl dark:hover:text-blue-500 hover:text-blue-800">
                <a
                  href="https://adi-2006.github.io/ChatBot_DeepInfra/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo 🔗
                </a>
              </div>
              {/* Description & Features */}
              <div className="text-center px-4 ">
                <p className="text-gray-900 max-w-[600px] hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] dark:text-gray-300">
                A simple yet powerful AI Chatbot that provides smart and interactive responses. Built using Deep Infra API for AI-powered conversations with a sleek UI.
                </p>
                <div className="w-[80%] mx-auto flex items-center justify-center">
                <ul className="mt-4 text-gray-900 text-start dark:text-gray-300  list-disc pl-5  list-outside">
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  ✅ AI-Powered Chat Responses</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">🎨 Clean & Responsive UI</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">⚡ Fast & Efficient Performance</li>
                  <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">🔗 Integrated with Deep Infra API for conversations </li>
                </ul>
                </div>
              </div>
              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap justify-center items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  React
                </span>
                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Redux Toolkit
                </span>
                
                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  JavaScript
                </span>

                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  DeepInfra API
                </span>

                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  HTML
                </span>
              </div>
            </div>




            {/* Pr:5 Tic Tac Toe */}
            <div ref={(element) => (divRefs.current[8] = element)}  className="w-[100%] rounded-2xl my-auto  flex flex-col dark:bg-gray-800 items-center  py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)] justify-center gap-6 lg:min-h-[350px] px-3 h-auto">
              {/* Title */}
              <h3 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                Tic Tac Toe
              </h3>
              {/* Image Section */}
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src="./tic.PNG"
                  className="w-[80%]   rounded-lg"
                  alt="Tic Tac Toe"
                />
                
              </div>
              {/* Live Link */}
              <div className="mx-auto group text-xl dark:hover:text-blue-500 hover:text-blue-800">
                <a
                  href="https://adi-2006.github.io/Tic_Tac_Toe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo 🔗
                </a>
              </div>
              {/* Description & Features */}
              <div className="text-center px-4 ">
                <p className="text-gray-900 max-w-[600px]   hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] dark:text-gray-300">
                A simple yet fun Tic-Tac-Toe game with smooth gameplay and an interactive UI. Built using HTML, CSS, and JavaScript for a seamless experience.  
                </p>
                <div className="w-[80%] mx-auto flex items-center justify-center">
                <ul className="mt-4 text-gray-900 text-start dark:text-gray-300  list-disc pl-5  list-outside">
                  <li  className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                  ✅ Classic Tic-Tac-Toe Gameplay</li>
                  <li  className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">🎨 Clean & Responsive UI</li>
                  <li  className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">⚡ Built using HTML, CSS & JavaScript</li>
                  <li  className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">🕹️ Smooth Animations</li>
                </ul>
                </div>
              </div>
              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap justify-center items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                
                
                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  JavaScript
                </span>

                
                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  CSS
                </span>
                <span className="px-2 py-1  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                  HTML
                </span>
              </div>
            </div>





            {/* Pr-6 razorPay Clone */}
            <div  ref={(element) => (divRefs.current[9] = element)} className="w-[100%] rounded-2xl  flex flex-col dark:bg-gray-800 items-center lg:my-2 my-3 py-4 shadow-[0_10px_10px_rgba(0,0,0,0.6)] justify-center gap-6 lg:min-h-[350px] px-3 h-auto">
              {/* Title */}
              <h3 className="text-center mx-auto text-2xl font-bold hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]">
                RazorPay Clone
              </h3>
              {/* Image Section */}
              <div className="flex flex-col items-center justify-center gap-4">
              
                <img
                  src="./razorpay.PNG"
                  className=" w-[80%] rounded-lg"
                  alt="RazorPay"
                />
              </div>
              {/* Live Link */}
              <div className="mx-auto group text-xl dark:hover:text-blue-500 hover:text-blue-800">
                <a
                  href="https://adi-2006.github.io/RazorPayClone/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo 🔗
                </a>
              </div>
              {/* Description & Features */}
              <div className="text-center px-4 ">
                <p className="text-gray-900 max-w-[600px]  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] dark:text-gray-300">
                Razorpay is an Indian payment gateway that enables businesses to accept, process, and disburse payments securely. It supports multiple payment modes, including cards, UPI, net banking, and wallets, offering seamless transactions with robust security and automation features.
                </p>
                <div className="w-[80%] mx-auto flex items-center justify-center">
                <ul className="mt-4 text-gray-900 text-start dark:text-gray-300  list-disc pl-5  list-outside">
               
                
                </ul>
                </div>
              </div>
              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap justify-center items-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151]  bg-gray-200 dark:bg-gray-900 rounded">
                  HTML
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                 TailWind Css
                </span>
                <span className="px-2 py-1 hover:dark:[text-shadow:0_0_15px_#87CEEB] transition duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] bg-gray-200 dark:bg-gray-900 rounded">
                Css
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
