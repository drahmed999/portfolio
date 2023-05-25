"use client";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "../../../../node_modules/@chakra-ui/react/dist";
import Top from "../Shared/Top";

import Periodontist from "./Periodontist";

import React from "react";
import Programming from "./Programming";

function TabSection() {
  return (
    <div className="m-3">
      <Tabs>
        <TabList className=" flex-col align-center items-center sm:flex-row justify-evenly gap-7 ">
          <button>
            <Tab className="border-2 py-1 px-8 border-red-400 hover:scale-110 duration-500 hover:bg-blue-200 hover:font-extrabold hover:underline transition-all rounded-md font-bold bg-gray-300">
              Dentistry
            </Tab>
          </button>

          <Tab className="border-2 py-1 px-8 border-red-400 hover:scale-110 duration-500 hover:bg-blue-200 hover:font-extrabold hover:underline transition-all rounded-md font-bold bg-gray-300">
            Programming
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="bg-white">
            <p><Periodontist/></p>
          </TabPanel>
          <TabPanel>
            <p><Programming/></p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Top id="#1"/>
    </div>
  );
}

export default TabSection;
