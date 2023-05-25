import React, { FC } from "react";
// import React, { Component } from 'react'

interface Id{
    id:string
}

const Top:FC<Id>=({id})=> {
  return (
    <div className="bg-white my-5 p-5  duration-1000 hover:scale-125 border-black border-t-4 rounded-t-3xl hover:bg-slate-200 hover:text-purple-950 flex  justify-end font-bold text-lg tracking-wider text-blue-300">
        <a
          href={id}
          className=" mx-3 gap-2  flex flex-row items-center underline px-2 animate-bounce "
        > <div>
        <svg
        className="h-6  bg-slate-400 rounded-xl duration-500 hover:scale-125"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
            ></path>
          </g>
        </svg>
      </div>

      <div className="">
     
          {" "}
          Back to Top
       
      </div>
      </a>
    </div>
  );
}

export default Top;
