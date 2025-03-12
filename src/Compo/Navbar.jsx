import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Themeswitcher from "./Themeswitcher";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-screen sticky top-0 z-[50] bg-white border-gray-300 dark:bg-gray-500 shadow">
        <nav className="flex lg:justify-between sm:justify-center justify-between items-center  mx-auto max-w-[80%] py-2">
          {/* Left Part */}
          <div className="lg:flex items-center sm:hidden gap-4 px-2">
            <div className="relative hover:bg-gray-200 w-[55px] h-[55px] rounded-full xl:block hidden">
              <img
                src="/My_Img.png"
                alt="Adi's logo"
                className="w-[40px] h-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 hover:text-orange-700 text-center dark:hover:text-orange-400 cursor-default">
              Aditya Kumar Dwivedi
            </h2>
          </div>

          {/* Middle */}
          <div className="hidden sm:block xl:w-[50%] max-w-[800px] ">
            <ul className="flex relative items-center  justify-between">
              {/* Home */}
              <li className="py-2 px-2 text-xl">
                <NavLink
                  className={({ isActive }) =>
                    `py-2 px-3 duration-200 border  dark:border-gray-200 hover:bg-gray-100 rounded-2xl
                     ${isActive
                      ? "text-orange-500"
                      : "text-gray-700 dark:text-white"
                    }
                     ${isActive
                      ? "bg-gray-200"
                      : "dark:bg-gray-600"
                    }
                   hover:text-orange-700 text-xl `
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* about */}
              <li className="py-2 px-2 text-xl">
                <NavLink
                  className={({ isActive }) =>
                    `py-2 px-3 duration-200 border dark:border-gray-200 hover:bg-gray-100 rounded-2xl
                     ${isActive
                      ? "text-orange-500"
                      : "text-gray-700 dark:text-white"
                    }
                    ${isActive
                      ? "bg-gray-200"
                      : "dark:bg-gray-600"
                    }
                   hover:text-orange-700 text-xl `
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              {/* skills */}
              <li className="py-2 px-2 text-xl">
                <NavLink
                  className={({ isActive }) =>
                    `py-2 px-3 duration-200 border dark:border-gray-200 hover:bg-gray-100 rounded-2xl
                    ${isActive
                      ? "text-orange-500"
                      : "text-gray-700 dark:text-white"
                    }
                    ${isActive
                      ? "bg-gray-200"
                      : "dark:bg-gray-600"
                    }
                    hover:text-orange-700 text-xl `
                  }
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              {/* projects */}
              <li className="py-2 px-2 text-xl">
                <NavLink
                  className={({ isActive }) =>
                    `py-2 px-3 duration-200 border dark:border-gray-200 hover:bg-gray-100 rounded-2xl
                     ${isActive
                      ? "text-orange-500"
                      : "text-gray-700 dark:text-white"
                    }
                    ${isActive ? "bg-gray-200" : "dark:bg-gray-600"}
                  hover:text-orange-700 text-xl `
                  }
                  to="/projects"
                >
                  Project
                </NavLink>
              </li>
              {/* contact */}
              <li className="py-2 px-2 text-xl">
                <NavLink
                  className={({ isActive }) =>
                    `py-2 px-3 duration-200 border dark:border-gray-200 hover:bg-gray-100 rounded-2xl
                    ${isActive
                      ? "text-orange-500"
                      : "text-gray-700 dark:text-white"
                    }
                    ${isActive
                      ? "bg-gray-200"
                      : "dark:bg-gray-600"
                    }
                   hover:text-orange-700 text-xl `
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* themeSwitcher  single icon*/}
          <div className="   sm:block hidden">
            <Themeswitcher />
          </div>
          {/* Icon  */}
          <div
            className="sm:hidden block dark:bg-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 hover:bg-zinc-300 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </div>
      {/*mobile view  */}
      {isOpen && (
        <div
          className="fixed inset-0 dark:bg-gray-600 bg-zinc-200 bg-opacity-80 z-[10] sm:hidden flex flex-col gap-4 items-center justify-center text-white"
        // Click anywhere to close
        >
          <div className="flex flex-col items-center gap-4">
            <h3 className="dark:text-white text-gray-950 text-xl text-center">
              Click To Change The Theme:
            </h3>
            <Themeswitcher />
          </div>
          <ul className="flex flex-col  relative items-center justify-between ">
            <li className="py-2 px-2 text-xl w-screen" onClick={closeMenu}>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 duration-200 text-center block border-gray-200 hover:bg-gray-100 rounded-2xl
                                    ${isActive
                    ? "text-orange-500"
                    : "text-gray-700"
                  }
                                    ${isActive ? "bg-gray-200" : "bg-amber-50"}
                                   hover:text-orange-700 text-xl `
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="py-2 px-2 text-xl w-screen" onClick={closeMenu}>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 duration-200 block text-center border-gray-200 hover:bg-gray-100 rounded-2xl
                                    ${isActive
                    ? "text-orange-500"
                    : "text-gray-700"
                  }
                                    ${isActive ? "bg-gray-200" : "bg-amber-50"}
                                   hover:text-orange-700 text-xl `
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="py-2 w-screen px-2 text-xl" onClick={closeMenu}>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 duration-200 block text-center border-gray-200 hover:bg-gray-100 rounded-2xl
                                    ${isActive
                    ? "text-orange-500"
                    : "text-gray-700"
                  }
                                    ${isActive ? "bg-gray-200" : "bg-amber-50"}
                                   hover:text-orange-700 text-xl `
                }
                to="/skills"
              >
                Skills
              </NavLink>
            </li>
            <li className="py-2 w-screen px-2 text-xl" onClick={closeMenu}>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 duration-200 block text-center border-gray-200 hover:bg-gray-100 rounded-2xl
                                    ${isActive
                    ? "text-orange-500"
                    : "text-gray-700"
                  }
                                    ${isActive ? "bg-gray-200" : "bg-amber-50"}
                                   hover:text-orange-700 text-xl `
                }
                to="/projects"
              >
                Project
              </NavLink>
            </li>
            <li className="py-2 w-screen px-2 text-xl" onClick={closeMenu}>
              <NavLink
                className={({ isActive }) =>
                  `py-2 px-3 duration-200 block text-center border-gray-200 hover:bg-gray-100 rounded-2xl
                                    ${isActive
                    ? "text-orange-500"
                    : "text-gray-700"
                  }
                                    ${isActive ? "bg-gray-200" : "bg-amber-50"}
                                   hover:text-orange-700 text-xl `
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
