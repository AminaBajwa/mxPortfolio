"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailSection = () => {
  const form = useRef(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_zwaqodb', 'template_6wpwq9d', form.current, {
          publicKey: 'sFi4BJJW-YaygPE0k',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setConfirmationMessage('Email sent successfully!');
            setTimeout(() => {
              setConfirmationMessage('');
            }, 5000); // Hide the confirmation message after 5 seconds
            toast.success('Email sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Failed to send email.');
          },
        );
    }
  };

  return (
    <>
       <div id='contact' className='max-w-screen-xl mx-auto text-center text-white'>
        <h1 className="text-4xl max-sm:text-3xl font-extrabold leading-tight">Contact Us</h1>
      </div>

  <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    {/* <div className="flex flex-col lg:flex-row items-center lg:justify-center mx-auto mb-[100px] lg:max-w-5xl z-50"> */}
      <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
      <div className="lg:w-full mt-12">
        <div id="glob" className="flex flex-row justify-around absolute flex-wrap mt-14 gap-5 px-[330px] z-10 items-center">
           <img src="glob_1.png" alt="" width={400} height={400} style={{ opacity: 0.4}}/>
        </div>
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-[40px]">Looking for a custom software development company?</h2>

        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
          You are in the right place. MetaXperts team will walk you through the process with ease and joy and deliver a high-quality product timely.
        </p>
        <div className="socials flex flex-row gap-2 mt-5 text-white">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@metaxperts.net">
           info@metaxperts.net
          </a>
          
        </div>
      </div>
      <div className="lg:w-full z-10">
        <form ref={form} onSubmit={sendEmail} className="p-8 rounded-lg shadow-md ">
          {/* <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-2">Name</label>
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border[#603786] bg-[#18191E]"
              type="text"
              name="from_name"
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-2">Name</label>
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 mb-1 leading-tight focus:outline-none focus:border-[#603786] bg-[#18191E] text-white"
              type="text"
              name="from_name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 font-bold mb-2">Email</label>
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 mb-1 leading-tight focus:outline-none focus:border-[#603786] bg-[#18191E] text-white"
              type="email"
              name="from_email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 font-bold mb-2">Message</label>
            <textarea
              className="appearance-none border-2 rounded w-full py-2 px-4 text-white mb-1 leading-tight focus:outline-none focus:border-[#603786] bg-[#18191E]"
              name="message"
              rows={5}
            />
          </div>
          <button
            className="shadow button-primary text-white font-medium focus:shadow-outline-purple focus:outline-none py-2 px-6 rounded"
            type="submit"
            
          >
            Send
          </button>
          {/* {confirmationMessage && (
            <span className="text-green-600 mt-2 mx-10">{confirmationMessage}</span>
          )} */}
        </form>
        <ToastContainer />
      </div>
      </div>
    </div>
    </>
  );
};

export default EmailSection;

