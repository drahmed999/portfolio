'use client'
import React from 'react'
import Image from "next/image";
import ahmed from "../../../../public/ahmed.jpg";

function Heading() {
  return (
    <header id='1'>
          <div className="bg-gray-200">
            <div className="flex-col justify-center items-center">
              <div >
                <h1 className="flex text-4xl text-purple-950  underline font-extrabold justify-center leading-loose">
                  <abbr title="Doctor">

                  Dr
                  </abbr>
                  .Ahmed
                </h1>
              </div>
              <div>
                <h2 className="text-2xl justify-center font-semibold flex">
                  <abbr title="Bachelor In Dental Surgery">
                    BDS,
                    </abbr>
                  <abbr title="Registered Dental Surgeon">
                    RDS,
                    </abbr>
                  <abbr title="Certified Health Researcher">
                    CHR,
                    </abbr>
                
                </h2>
                <div className="text-xl flex-col text-center font-medium mb-3">
                  <ul>
                    <li>
                      <h3>PGR Periodontology</h3>
                    </li>
                    <li>
                      <h4>Certified Web Developer</h4>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center py-3 bg-gray-100">
                <Image
                  src={ahmed}
                  alt=""
                  width={250}
                  height={250}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </header>
  )
}

export default Heading