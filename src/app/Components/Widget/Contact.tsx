import React from "react";
import { SocialIcon } from "react-social-icons";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="  mb-1 mx-auto bg-pink-200 p-2 rounded-r-full">
      <div className="flex justify-center text-3xl pt-3  font-serif font-extrabold underline">
        Contact
      </div>



<div className="flex-col-reverse flex md:flex-row ">
      {/*Social icons  */}


<div className="flex bottom-0 fixed items-center justify-center flex-row lg:flex-col  hover:bg-black  bg-white duration-700 mt-4 lg:p-5 rounded-b-full lg:justify-evenly gap-5 lg:mt-7 lg:fixed lg:top-5  lg:mb-5  ">
      <div className="hover:scale-125 duration-700">
        <SocialIcon url="https://web.facebook.com/ahmed.sharif.3781"/>
      </div>
      <div className="hover:scale-125 duration-700">
        <SocialIcon url="https://www.instagram.com/ahmedsharif7/?hl=bg" />
      </div>
      <div className="hover:scale-125 duration-700">
        <SocialIcon url="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" />
      </div>
      <div className="hover:scale-125 duration-700">
        <SocialIcon url="https://discord.com/channels/drahmed#7357" />
      </div>
      <div className="hover:scale-125 duration-700">
        <SocialIcon url="https://github.com/drahmed999" />
      </div>
 

      </div>
      <div className="flex flex-row justify-center lg:ml-6 lg:pl-24">
        <ContactForm/>
      </div>
      
</div>
    </div>
  );
}

export default Contact;
