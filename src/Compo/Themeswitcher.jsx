import React, { useEffect, useState } from 'react'

function Themeswitcher() {
const [darkMode ,setdarkMode] = useState(
    localStorage.getItem("theme") === "dark"
);

useEffect(()=>{
    document.documentElement.classList.toggle("dark",darkMode);

    localStorage.setItem("theme",darkMode ? "dark": "light")
},[darkMode])

  return (
    <div>
    <div className={`w-[80px] h-[40px] border-2 border-gray-400 rounded-4xl bg-gray-200 flex ${darkMode ? "bg-gray-500 justify-end" : "bg-gray-200 justify-start"}` } onClick={()=>{setdarkMode(!darkMode)}}>
      <div className={`w-[50%] h-full rounded-full bg-white`} ></div>
    </div>
  </div>
  )
}

export default Themeswitcher