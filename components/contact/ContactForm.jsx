import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { restAPIUrl } from '../../shared/environment';
//import { NextResponse } from "next/server";


async function sendToApi(event) {
console.log(restAPIUrl);
  const jsonEmail = {
    "name": event.target.name.value,
    "email_type":"contact",
    "email": event.target.email.value,
    "message": event.target.message.value
  }

   const res = await fetch(`${restAPIUrl}/mail`, {
    method: 'POST',
    body: JSON.stringify(jsonEmail),
  });

  return await res.json();
}

const CommonContact = ({ condition }) => {
  const form = useRef();



  // use Email js for recive messag
  
  const sendEmail = async (event) => {
    event.preventDefault();
    await sendToApi(event).then(
      (result) => {
        if (result.success) {  
        toast.success("Message Sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        document.getElementById("myForm").reset();
      } else {
        toast.error("Ops Message not Sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    );
  };

  return (
    <div
      className={`${
        condition
          ? "mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2"
          : "  dark:border-[#212425] dark:border-2 mb-16  md:p-[48px]  p-4  "
      } bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]`}
    >
      <h3 className="text-4xl  ">
        <span className="text-gray-lite dark:text-[#A6A6A6] ">
          I&apos;m always open to discussing 
        </span>
        <br />
        <span className="font-semibold dark:text-white">
        DevOps and Web Development opportunities.
        </span>
      </h3>

      {/* Form Start */}
      <form id="myForm" ref={form} onSubmit={sendEmail}>
        <div className="relative z-0 w-full mt-[40px] mb-8 group">
          <input
            type="text"
            name="name"
            className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Name *
          </label>
        </div>
        {/* End single block */}

        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="email"
            className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
            placeholder=" "
            id="email"
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email *
          </label>
        </div>
        {/* End single block */}

        <div className="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="message"
            className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
            placeholder=" "
            id="message"
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Message *
          </label>
        </div>
        {/* End single block */}

        <div className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg  mt-3">
          <input
            type="submit"
            className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
            value="Submit"
          />
        </div>
        {/* End single block */}
      </form>
    </div>
  );
};

export default CommonContact;
