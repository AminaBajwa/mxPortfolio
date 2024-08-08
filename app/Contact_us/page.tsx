
"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact_us = () => {

  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_5az9x9x', 'template_7vnqxth', form.current, 'Zv4J71vDI6dkJFHNP')
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Email Sent Successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Failed to send E-mail.');
          },
        );
    }
  };                                                                               

  return (
    
    <>

    <style>
      {`
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap");

.card-hover {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.08);
}

/* .card-hover:hover .card-hover__content {
  background-color: #DEE8C2;
  bottom: 100%;
  transform: translateY(100%);
  padding: 50px 60px;
  transition: all 0.35s cubic-bezier(.1, .72, .4, .97);
} */

/* .card-hover:hover .card-hover__link {
  opacity: 1;
  transform: translate(-50%, 0);
  transition: all 0.3s 0.35s cubic-bezier(.1, .72, .4, .97);
} */

.card-hover__content {
  width: 100%;
  text-align: center;
  /* background-color: #86B971; */
  padding: 0 80px 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  /* transform: translateY(0); */
  transition: all 0.35s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
  will-change: bottom, background-color, transform, padding;
  z-index: 1;
}

.card-hover__content::before,
.card-hover__content::after {
  content: "";
  width: 100%;
  height: 120px;
  background-color: inherit;
  position: absolute;
  left: 0;
  z-index: -1;
}

.card-hover__content::before {
  top: -80px;
  clip-path: ellipse(60% 80px at bottom center);
}

.card-hover__content::after {
  bottom: -80px;
  clip-path: ellipse(60% 80px at top center);
}

.card-hover__extra {
  height: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  background-color: rgba(150, 21, 219, 0.174);
  padding: 80px;
  bottom: 0;
  z-index: 0;
  color: #dee8c2;
  transform: translateY(100%);
  will-change: transform;
  transition: transform 0.35s;
}




body {
  --background-color: #18181b;
  --text-color: #a1a1aa;
  --card-background-color: rgba(255, 255, 255, 0.015);
  --card-border-color: rgba(255, 255, 255, 0.1);
  --card-box-shadow-1: rgba(0, 0, 0, 0.05);
  --card-box-shadow-1-y: 3px;
  --card-box-shadow-1-blur: 6px;
  --card-box-shadow-2: rgba(0, 0, 0, 0.1);
  --card-box-shadow-2-y: 8px;
  --card-box-shadow-2-blur: 15px;
  --card-label-color: #ffffff;
  --card-icon-color: #d4d4d8;
  --card-icon-background-color: rgba(255, 255, 255, 0.08);
  --card-icon-border-color: rgba(255, 255, 255, 0.12);
  --card-shine-opacity: 0.1;
  --card-shine-gradient: conic-gradient(
      from 205deg at 50% 50%,
      rgba(16, 185, 129, 0) 0deg,
      rgba(150, 21, 219, 0.174) 25deg,
      rgba(150, 21, 219, 0.174) 295deg,
      rgba(16, 185, 129, 0) 360deg
  );
  --card-line-color: #2a2b2c;
  --card-tile-color: rgba(150, 21, 219, 0.174);
  --card-hover-border-color: rgba(255, 255, 255, 0.2);
  --card-hover-box-shadow-1: rgba(0, 0, 0, 0.04);
  --card-hover-box-shadow-1-y: 5px;
  --card-hover-box-shadow-1-blur: 10px;
  --card-hover-box-shadow-2: rgba(0, 0, 0, 0.3);
  --card-hover-box-shadow-2-y: 15px;
  --card-hover-box-shadow-2-blur: 25px;
  --card-hover-icon-color: #9615DB;
  --card-hover-icon-background-color:#9615DB
  --card-hover-icon-border-color: #9615DB;
  --blur-opacity: 0.01;
}

body.light {
  --background-color: #fafafa;
  --text-color: #52525b;
  --card-background-color: transparent;
  --card-border-color:#9615DB;
  --card-box-shadow-1: #9615DB;
  --card-box-shadow-1-y: 3px;
  --card-box-shadow-1-blur: 6px;
  --card-box-shadow-2: #9615DB;
  --card-box-shadow-2-y: 2px;
  --card-box-shadow-2-blur: 7px;
  --card-label-color: #18181b;
  --card-icon-color: #18181b;
  --card-icon-background-color: #9615DB;
  --card-icon-border-color: #9615DB;
  --card-shine-opacity: 0.3;
  --card-shine-gradient: conic-gradient(
      from 225deg at 50% 50%,
      rgba(16, 185, 129, 0) 0deg,
      #9615DB 25deg,
      #edfaf6 285deg,
      #ffffff 345deg,
      rgba(16, 185, 129, 0) 360deg
  );
  --card-line-color: #e9e9e7;
  --card-tile-color: #9615DB;
  --card-hover-border-color: #9615DB;
  --card-hover-box-shadow-1: #9615DB;
  --card-hover-box-shadow-1-y: 3px;
  --card-hover-box-shadow-1-blur: 6px;
  --card-hover-box-shadow-2: #9615DB;
  --card-hover-box-shadow-2-y: 8px;
  --card-hover-box-shadow-2-blur: 15px;
  --card-hover-icon-color: #18181b;
  --card-hover-icon-background-color: #9615DB;
  --card-hover-icon-border-color: #9615DB;
  --blur-opacity: 0.1;
}
body.toggle .grid * {
  transition-duration: 0s !important;
}

#containerr.custom-grid {
  display: grid;
  grid-template-columns: repeat(3, 255px);
  grid-gap: 32px;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  #containerr.custom-grid {
    grid-template-columns: repeat(1, 240px);
  }
}

.card {
  background-color: var(--background-color);
  box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1), 0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2), 0 0 0 1px var(--card-border-color);
  padding: 56px 16px 16px 16px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 15px;
  background-color: var(--card-background-color);
}
.card .icon {
  z-index: 2;
  position: relative;
  display: table;
  justify-content: center;
  align-items: center;
  padding: 8px;
}
.card .icon::after {
  content: "";
  position: absolute;
  inset: 4.5px;
  border-radius: 50%;
  background-color: var(--card-icon-background-color);
  border: 1px solid var(--card-icon-border-color);
  -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
  transition: background-color 0.25s, border-color 0.25s;
}
.card .icon svg {
  position: relative;
  z-index: 1;
  display: block;
  width: 24px;
  height: 24px;
  transform: translateZ(0);
  color: var(--card-icon-color);
  transition: color 0.25s;
}
.card h4 {
  z-index: 2;
  position: relative;
  margin: 12px 0 4px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  color: var(--card-label-color);
}
.card p {
  z-index: 2;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-color);
}
.card .shine {
  border-radius: inherit;
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s;
}

.card .shine:before {
  content: "";
  width: 150%;
  padding-bottom: 150%;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 55%;
  filter: blur(35px);
  opacity: var(--card-shine-opacity);
  transform: translateX(-50%);
  background-image: var(--card-shine-gradient);
}
.card .background {
  border-radius: inherit;
  position: absolute;
  inset: 0;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
  mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
}
.card .background .tiles {
  opacity: 0;
  transition: opacity 0.25s;
}
.card .background .tiles .tile {
  position: absolute;
  background-color: var(--card-tile-color);
  -webkit-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  opacity: 0;
}
.card .background .tiles .tile.tile-4, .card .background .tiles .tile.tile-6, .card .background .tiles .tile.tile-10 {
  -webkit-animation-delay: -2s;
          animation-delay: -2s;
}
.card .background .tiles .tile.tile-3, .card .background .tiles .tile.tile-5, .card .background .tiles .tile.tile-8 {
  -webkit-animation-delay: -4s;
          animation-delay: -4s;
}
.card .background .tiles .tile.tile-2, .card .background .tiles .tile.tile-9 {
  -webkit-animation-delay: -6s;
          animation-delay: -6s;
}
.card .background .tiles .tile.tile-1 {
  top: 0;
  left: 0;
  height: 10%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-2 {
  top: 0;
  left: 22.5%;
  height: 10%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-3 {
  top: 0;
  left: 50%;
  height: 10%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-4 {
  top: 0;
  left: 77.5%;
  height: 10%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-5 {
  top: 10%;
  left: 0;
  height: 22.5%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-6 {
  top: 10%;
  left: 22.5%;
  height: 22.5%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-7 {
  top: 10%;
  left: 50%;
  height: 22.5%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-8 {
  top: 10%;
  left: 77.5%;
  height: 22.5%;
  width: 22.5%;
}
.card .background .tiles .tile.tile-9 {
  top: 32.5%;
  left: 50%;
  height: 22.5%;
  width: 27.5%;
}
.card .background .tiles .tile.tile-10 {
  top: 32.5%;
  left: 77.5%;
  height: 22.5%;
  width: 22.5%;
}
@-webkit-keyframes tile {
  0%, 12.5%, 100% {
    opacity: 1;
  }
  25%, 82.5% {
    opacity: 0;
  }
}
@keyframes tile {
  0%, 12.5%, 100% {
    opacity: 1;
  }
  25%, 82.5% {
    opacity: 0;
  }
}
.card .background .line {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s;
}
.card .background .line:before, .card .background .line:after {
  content: "";
  position: absolute;
  background-color: var(--card-line-color);
  transition: transform 0.35s;
}
.card .background .line:before {
  left: 0;
  right: 0;
  height: 1px;
  transform-origin: 0 50%;
  transform: scaleX(0);
}
.card .background .line:after {
  top: 0;
  bottom: 0;
  width: 1px;
  transform-origin: 50% 0;
  transform: scaleY(0);
}
.card .background .line.line-1:before {
  top: 10%;
}
.card .background .line.line-1:after {
  left: 22.5%;
}
.card .background .line.line-1:before, .card .background .line.line-1:after {
  transition-delay: 0.3s;
}
.card .background .line.line-2:before {
  top: 32.5%;
}
.card .background .line.line-2:after {
  left: 50%;
}
.card .background .line.line-2:before, .card .background .line.line-2:after {
  transition-delay: 0.15s;
}
.card .background .line.line-3:before {
  top: 55%;
}
.card .background .line.line-3:after {
  right: 22.5%;
}
.card:hover {
  box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1), 0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2), 0 0 0 1px var(--card-hover-border-color);
}
.card:hover .icon::after {
  background-color: var(--card-hover-icon-background-color);
  border-color: var(--card-hover-icon-border-color);
}
.card:hover .icon svg {
  color: var(--card-hover-icon-color);
}
.card:hover .shine {
  opacity: 1;
  transition-duration: 0.5s;
  transition-delay: 0s;
}
.card:hover .background .tiles {
  opacity: 1;
  transition-delay: 0.25s;
}
.card:hover .background .tiles .tile {
  -webkit-animation-name: tile;
          animation-name: tile;
}
.card:hover .background .line {
  opacity: 1;
  transition-duration: 0.15s;
}
.card:hover .background .line:before {
  transform: scaleX(1);
}
.card:hover .background .line:after {
  transform: scaleY(1);
}
.card:hover .background .line.line-1:before, .card:hover .background .line.line-1:after {
  transition-delay: 0s;
}
.card:hover .background .line.line-2:before, .card:hover .background .line.line-2:after {
  transition-delay: 0.15s;
}
.card:hover .background .line.line-3:before, .card:hover .background .line.line-3:after {
  transition-delay: 0.3s;
}

.day-night {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: 0.3;
}
.day-night input {
  display: none;
}
.day-night input + div {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;
  box-shadow: inset 8px -8px 0 0 var(--text-color);
  transform: scale(1) rotate(-2deg);
  transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
}
.day-night input + div:before {
  content: "";
  width: inherit;
  height: inherit;
  border-radius: inherit;
  position: absolute;
  left: 0;
  top: 0;
  transition: background-color 0.3s ease;
}
.day-night input + div:after {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: -3px 0 0 -3px;
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 -23px 0 var(--text-color), 0 23px 0 var(--text-color), 23px 0 0 var(--text-color), -23px 0 0 var(--text-color), 15px 15px 0 var(--text-color), -15px 15px 0 var(--text-color), 15px -15px 0 var(--text-color), -15px -15px 0 var(--text-color);
  transform: scale(0);
  transition: all 0.3s ease;
}
.day-night input:checked + div {
  box-shadow: inset 20px -20px 0 0 var(--text-color);
  transform: scale(0.5) rotate(0deg);
  transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
}
.day-night input:checked + div:before {
  background: var(--text-color);
  transition: background-color 0.3s ease 0.1s;
}
.day-night input:checked + div:after {
  transform: scale(1);
  transition: transform 0.5s ease 0.15s;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
}
*:before, *:after {
  box-sizing: inherit;
}

/* body {
  min-height: 100vh;
  display: flex;
  font-family: "Inter", Arial;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  overflow: hidden;
} */
body:before {
  content: "";
  position: absolute;
  inset: 0 -60% 65% -60%;
  background-image: radial-gradient(ellipse at top, #10b981 0%, var(--background-color) 50%);
  opacity: var(--blur-opacity);
}
body .twitter {
  position: fixed;
  display: block;
  right: 12px;
  bottom: 12px;
}
body .twitter svg {
  width: 32px;
  height: 32px;
  fill: #fff;
}



.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
      `}
    </style>

    <div className="flex flex-col gap-20 max-w-full mx-auto relative overflow-hidden z-10 bg-[#030014] rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
  <section className="py-10 sm:py-16 lg:py-24 ">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">Contact Us</h2>
        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">Get in touch with us to discuss your project needs. Our team is ready to assist you with expert solutions and support.</p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 sm:mt-16 ">
        <div id="containerr" className="custom-grid text-center md:px-0 justify-center items-center">
          <div className="card flex flex-col justify-center items-center">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <h4>Phone</h4>
            <p className="mt-6 text-md font-medium text-gray-200">+92 345 6699233</p>
            <p className="mt-1 text-md font-medium text-gray-200">+92 337 1212048</p>

            <div className="shine" />
    <div className="background">
        <div className="tiles">
            <div className="tile tile-1" />
            <div className="tile tile-2" />
            <div className="tile tile-3" />
            <div className="tile tile-4" />
            <div className="tile tile-5" />
            <div className="tile tile-6" />
            <div className="tile tile-7" />
            <div className="tile tile-8" />
            <div className="tile tile-9" />
            <div className="tile tile-10" />
        </div>

    </div>
  
          </div>

          <div className="card flex flex-col justify-center items-center">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <h4>E-mail</h4>
            <p className="mt-6 text-md font-medium text-gray-200">info@metaxperts.net</p>
            <p>  &nbsp;</p>

            <div className="shine" />
    <div className="background">
        <div className="tiles">
            <div className="tile tile-1" />
            <div className="tile tile-2" />
            <div className="tile tile-3" />
            <div className="tile tile-4" />
            <div className="tile tile-5" />
            <div className="tile tile-6" />
            <div className="tile tile-7" />
            <div className="tile tile-8" />
            <div className="tile tile-9" />
            <div className="tile tile-10" />
        </div>
          </div>
          </div>

          <div className="card flex flex-col justify-center items-center">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <h4>Head Office</h4>
            <p className="mt-6 text-md font-medium leading-relaxed text-gray-200">Office # 310, Al-Khalil Center, Sublime Chowk, Sialkot</p>
            <div className="shine" />
    <div className="background">
        <div className="tiles">
            <div className="tile tile-1" />
            <div className="tile tile-2" />
            <div className="tile tile-3" />
            <div className="tile tile-4" />
            <div className="tile tile-5" />
            <div className="tile tile-6" />
            <div className="tile tile-7" />
            <div className="tile tile-8" />
            <div className="tile tile-9" />
            <div className="tile tile-10" />
        </div>
            </div>
          </div>
        </div>

        <div className="form mt-6 overflow-hidden bg-[#18181b] rounded-xl">
          <div className="px-6 py-12 sm:p-12">
            <h3 className="text-3xl font-semibold text-center text-gray-200">Send us a message</h3>
            <form ref={form} onSubmit={sendEmail} className="mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label className="text-base font-medium text-gray-200">Your name</label>
                  <div className="mt-2.5 relative">
                    <input type="text" placeholder="Enter your full name" name="from_name" required className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-200">Email address</label>
                  <div className="mt-2.5 relative">
                    <input type="email" placeholder="Enter your email" name="from_email" required className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-200">Phone number</label>
                  <div className="mt-2.5 relative">
                    <input type="tel" placeholder="Enter your phone number" name="phone" className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-200">Company name</label>
                  <div className="mt-2.5 relative">
                    <input type="text" placeholder="Enter your company name" name="from_company" className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-base font-medium text-gray-200">Message</label>
                  <div className="mt-2.5 relative">
                    <textarea placeholder="" name="message" required className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-inherit border border-gray-700 rounded-md resize-y focus:outline-none focus:border-[#9615DB] caret-[#9615DB]" rows={4} defaultValue={""} />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-700 button-primary border border-transparent rounded-md focus:outline-none">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
{/* 
  <div style={{ width: '100%' }}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108608.85894355518!2d74.40826423534814!3d32.50784278286814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f16e8dd2a4db9%3A0x55a6cc0f1a96d147!2sMeta%20Xperts!5e0!3m2!1sen!2s!4v1691763312605!5m2!1sen!2s" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div> */}
</div>

<ToastContainer />
    </>
  )
}

export default Contact_us;



