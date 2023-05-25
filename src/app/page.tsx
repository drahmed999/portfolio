"use client";
import Image from "next/image";
import Wrapper from "./Components/Shared/Wrapper";
import Heading from "./Components/Widget/Heading";
import TabSection from "./Components/Widget/TabSection";
import backgroundImage from "../../public/backgroundImage.jpg"


export default function Home() {
  return (
    <main className="bg-slate-900 via-slate-500 to-slate-800  bg-cover ">

      <Wrapper>
        <Heading/>
        <TabSection/>
        
      </Wrapper>
      
    </main>
  );
}
