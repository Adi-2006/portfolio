import React from "react";
import Form from "./Form.jsx";

function Contact() {
  return (
    <>
      {/* main div */}
      <div className="w-screen bg-zinc-300 min-h-screen relative pt-4 pb-20 dark:bg-zinc-500">
        {/* 80% */}
        <div className="w-10/12 mx-auto rounded-2xl  flex items-center bg-amber-100 justify-center dark:bg-[#242437]  h-auto relative min-h-screen py-4  pb-8 ">
          <div className="flex w-[90%] lg:flex-row py-2 flex-col lg:gap-0 gap-16 mx-auto lg:justify-between items-center">
            {/* left */}
            <div className=" flex lg:items-start items-center gap-8 flex-col ">
              {/* contact us */}

              <p className="py-2 px-4 hidden lg:block dark:bg-zinc-600 bg-zinc-300 rounded-2xl hover:dark:[text-shadow:0_0_15px_#87CEEB] dark:shadow-[0_0_10px_#0ff] dark:hover:shadow-[0_0_20px_#0ff]  ease-in-out hover:[text-shadow:0_0_15px_#374151] shadow-[0_8px_16px_rgba(176,224,230,0.8)] font-semibold dark:text-white">
                Contact US
              </p>

              <h2 className="dark:text-white hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] smobile:text-3xl text-2xl sm:text-4xl font-bold">
                Let's Get In Touch.
              </h2>
             
                <p className="dark:text-white sm:text-start text-center font-medium hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] text-lg">
                  Or Just reach out manually to{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dwivediaditya4093@gmail.com"
                    target="_blank"
                    className="text-blue-500 font-bold text-xl hover:text-teal-400"
                  >
                    Gmail
                  </a>
                </p>
             
              <div className="flex items-center justify-start gap-2  dark:hover:shadow-[0_0_10px_#0ff] shadow-[0_0_6px_#0ff] hover:shadow-[0_0_10px_#3812fc] duration-200 py-2 px-2 rounded-2xl bg-zinc-500">
                {/* linkedin */}
                
                 <a href="https://www.linkedin.com/in/aditya-kumar-dwivedi-3702552aa/" className="py-2 px-1">
                  <img src="link.png" alt="" target="_blank"  className="rounded-xl"/>
                 </a>
               
                {/* github */}
                
                <a href="https://github.com/Adi-2006" target="_blank" className="py-2 px-1">
                  <img src="git.png" alt="" className="rounded-xl" />
                 </a>
               
                {/* gmail */}
                
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dwivediaditya4093@gmail.com" target="_blank" className="py-2 px-1">
                  <img src="mail.png" alt="" className="rounded-xl" />
                 </a>
               
                {/* x */}
                
                <a href="https://twitter.com/Adi4093" target="_blank" className="py-2 px-1">
                  <img src="x.png" alt="" className="rounded-xl" />
                 </a>
               
              </div>
            </div>
            {/* right */}
            <div className="flex items-center justify-center">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
