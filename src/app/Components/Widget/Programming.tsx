import Image from "next/image";
import React from "react";
import bgCode from "../../../../public/bgCode.jpg";
import Link from "next/link";
import { Divider } from "@chakra-ui/react";
import ProjectCards from "./ProjectCards";
import paoDao from '../../../../public/paoDao.png'
import Git from '../../../../public/Git.png'
import Todo from '../../../../public/Todo.png'
import Portfolio from '../../../../public/Portfolio.png'
// import  from '../../../../public/paoDao.png'

function Programming() {
  return (
    <>
      {/* HEADER */}
      <div className="" id="2">
        {/* <Image src={bgCode} alt='background_Image' width={500} height={500} className="w-screen relative mt-4 bg-repeat bg-scroll bg-origin-padding blur-sm  bg-center -z-50  "/> */}
        <div className=" text-white bg-black rounded-full mt-8 p-3">
          <div className="flex flex-row items-center space-x-1 text-4xl gap-4 justify-center font-extrabold hover:tracking-widest underline shadow-lg  hover:scale-110 transition-all duration-500 hover:text-red-700">
            <div className="">
              {" "}
              <svg
                className="bg-red-400 rounded-full p-2 "
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64px"
                height="64px"
                viewBox="0 0 94.504 94.504"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828 l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587 c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z"></path>{" "}
                      <path d="M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414 l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833 c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229 C33.542,66.771,33.542,65.505,32.759,64.724z"></path>{" "}
                      <path d="M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382 c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083 c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div> WEB DEVELOPER</div>{" "}
          </div>
        </div>
      </div>
      {/* PARAGRPHS */}
      <div className=" text-white bg-black rounded-3xl mt-3 p-3">
        <p>
          I am a skilled web developer with expertise in
          <b className="text-blue-500 space-x-1 gap-1 m-2 text-lg">
            JavaScript, TypeScript, HTML, Tailwind CSS, React, Next.js, and
            Contentful.
          </b>
          I have honed my abilities through the
          <Link href="https://www.panaverse.co/">
            {" "}
            <b className="text-red-600 text-lg hover:text-2xl duration-1000 underline">
              Panaverse-Presidential Initiative of Artificial Intelligence.
            </b>
          </Link>{" "}
          With an eye for detail and a commitment to excellence, I deliver
          captivating web experiences that seamlessly blend aesthetics and
          user-centric functionality. My proficiency in{" "}
          <b className="text-yellow-900 text-lg">front-end development</b> and
          effective collaboration with cross-functional teams allow me to bring
          ideas to life and deliver exceptional results.
        </p>
        <p className=" mt-2">
          Through my journey as a web developer, I embrace modern technologies
          like React and Next.js to create stunning digital experiences. I write
          clean and efficient code using JavaScript and TypeScript, and bring
          designs to life with precision using HTML and CSS. With Contentful, I
          ensure efficient content management and seamless integration with
          third-party services. Staying updated with industry trends, I deliver
          innovative solutions that exceed client expectations. I am dedicated
          to crafting eye-catching, user-friendly websites that leave a lasting
          impression.
        </p>
      </div>

      <Divider orientation="horizontal" className="bg-white" />
      {/* project */}
      <div className=" text-black bg-white  rounded-full mt-[50px] p-3">
        <div className="flex flex-row items-center space-x-1 text-3xl gap-4 justify-center font-extrabold hover:tracking-widest underline shadow-lg  hover:scale-110 transition-all duration-500 hover:text-red-700">
          <div className="">
            {" "}
            <svg

              width="64px"
              height="64px"
              viewBox="-92.16 -92.16 1208.32 1208.32"
              className="icon "
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(0)"
              stroke="#000000"
              stroke-width="0.01024"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
                transform="translate(0,0), scale(1)"
              >
                <path
                  transform="translate(-92.16, -92.16), scale(37.76)"
                  d="M16,31.942508379463106C18.469410072472378,31.412229451555284,19.09650708223273,28.037736054672887,20.994686913571265,26.371574245210578C22.341635461625085,25.18926570256032,24.25691797433108,24.864128470383335,25.516543111300543,23.589189885414342C26.83954768511866,22.250101350463908,28.2181882175208,20.70833271294667,28.437096560187754,18.838686130223035C28.65536421895285,16.974511483621683,27.360138262833388,15.313402366388509,26.69082803557869,13.5598882650519C26.09855960377737,12.008214609623169,25.35059286849756,10.588583537781917,24.704111068987597,9.058703048605619C23.849174312628424,7.035519930341497,24.10465354314985,4.201574285643682,22.243460302051815,3.0353210941394266C20.450131524840277,1.9115928516032101,18.11365383503683,3.710685656892309,16,3.604569061193615C13.753319823226667,3.4917738399369735,11.500199582174531,1.4734736607523153,9.447155876059092,2.3928789682333935C7.410386327137663,3.304996293264617,7.266932525212338,6.193904500004903,6.04622012386751,8.062125429991145C4.940329758454544,9.754618702492122,3.268065379445109,11.038621569568882,2.560463622415739,12.932513522987355C1.8128025534326235,14.933623989948225,0.8536670462448219,17.34800213288641,1.8759935895821904,19.22371229542251C2.972506457584341,21.23553556585139,6.327819640137163,20.783490953210677,7.797548322168785,22.541236936664216C9.216616644694234,24.23839483707157,8.398725975994584,27.097128043919444,9.853132570538786,28.764101739169803C11.388853562301064,30.524274242591233,13.71611820811994,32.43294712901182,16,31.942508379463106"
                  fill="#7ed0ec"
                  strokeWidth="0"
                ></path>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="10.24"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M969.536 402.944a22.4 22.4 0 0 0-22.336 22.08V273.088a22.4 22.4 0 0 0 44.736-0.128h0.064V160a22.4 22.4 0 0 0-22.4-22.4H54.4a22.528 22.528 0 0 0-22.4 22.4v604.608c0 12.288 10.112 22.4 22.4 22.4h915.2a22.4 22.4 0 0 0 22.4-22.4V425.344a22.4 22.4 0 0 0-22.464-22.4z"
                  fill=""
                ></path>
                <path
                  d="M969.6 328m-22.4 0a22.4 22.4 0 1 0 44.8 0 22.4 22.4 0 1 0-44.8 0Z"
                  fill=""
                ></path>
                <path
                  d="M77.44 631.168a0.64 0.64 0 0 1-0.64-0.64V189.376a0.64 0.64 0 0 1 0.64-0.64h869.184c0.256 0 0.64 0.256 0.64 0.64v441.152c0 0.32-0.384 0.64-0.64 0.64H77.44z"
                  fill="#545454"
                ></path>
                <path
                  d="M77.44 740.032a0.64 0.64 0 0 1-0.64-0.64v-69.12a0.64 0.64 0 0 1 0.64-0.64h869.184c0.256 0 0.64 0.32 0.64 0.64v69.12c0 0.32-0.384 0.64-0.64 0.64H77.44z"
                  fill="#E0E0E0"
                ></path>
                <path
                  d="M76.8 631.168h870.464v44.8H76.8zM637.12 875.776H386.816l19.264-88.768h211.904z"
                  fill=""
                ></path>
                <path
                  d="M431.68 875.776l19.2-88.768h122.368l19.136 88.768z"
                  fill="#E0E0E0"
                ></path>
                <path
                  d="M721.984 888a16 16 0 0 1-16 16H318.016a16 16 0 0 1 0-32h388.032a16 16 0 0 1 15.936 16z"
                  fill=""
                ></path>
                <path
                  d="M512 706.688m-18.176 0a18.176 18.176 0 1 0 36.352 0 18.176 18.176 0 1 0-36.352 0Z"
                  fill=""
                ></path>
                <path
                  d="M366.272 445.76a22.464 22.464 0 0 1-31.68 0 22.464 22.464 0 0 1 0-31.68l134.272-134.272a22.464 22.464 0 0 1 31.68 0 22.464 22.464 0 0 1 0 31.68L366.272 445.76z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M407.424 540.16a22.464 22.464 0 0 1-31.68 0 22.528 22.528 0 0 1 0-31.744l67.328-67.264a22.464 22.464 0 0 1 31.68 0 22.464 22.464 0 0 1 0 31.68L407.424 540.16z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>{" "}
          
          </div>
          <div> PROJECTS</div>{" "}
        </div>
      </div>
      {/* crads */}
      <div className="p-5 mx-24">
      <ProjectCards cardImg={paoDao} cardLink="" cardName="Panaverse DAO Website"/>
      <ProjectCards cardImg={Todo} cardLink="" cardName="TODO APP"/>
      <ProjectCards cardImg={Portfolio} cardLink="" cardName="PORTFOLIO"/>
      <ProjectCards cardImg={Git} cardLink="https://github.com/drahmed999" cardName="GIT HUB"/>
      </div>
      </>
  );
}

export default Programming;
