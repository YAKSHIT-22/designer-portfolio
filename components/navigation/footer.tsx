"use client"
import React, { useState } from 'react';
import { toast } from 'sonner';

export const Footer = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleMailClick = () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const mailtoLink = `mailto:manikagoyal@gmail.com?subject=Portfolio Contact&body=Hi Manika,%0D%0A%0D%0AMy email: ${email}%0D%0A%0D%0A[Write your message here...]`;
    window.location.href = mailtoLink;
    setEmail("");
  };

  return (
    <footer className='w-full h-full flex items-start justify-start bg-secondary font-popp tracking-tighter pt-8'>
      <div className='w-full h-full flex items-center justify-center flex-col gap-12'>
        <div className='w-full h-full flex items-center justify-center flex-col gap-4 max-w-2xl px-4'>
          <div className='w-full flex items-center justify-center h-12 sm:h-16 mb-12'>
            <img src="/logos/whitelogo.svg" alt="Logo" className='w-full h-full' />
          </div>
          <div className='w-full flex items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl font-semibold lg:text-5xl'>Let's Design Together</h1>
          </div>
          <div className='w-full flex items-center justify-center text-center'>
            <p className='text-sm sm:text-base font-normal md:text-lg'>
              Let's create something amazing together! Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>
          </div>
          <div className='w-full flex items-start justify-start flex-col gap-4 md:flex-row px-6 md:px-3 pt-12'>
            <div className='md:w-[75%] w-full'>
              <input
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full h-full pl-4 pr-2 py-3 text-sm rounded-full text-black bg-white'
              />
            </div>
            <button
              onClick={handleMailClick}
              className='md:w-[25%] w-full flex flex-row text-sm items-center justify-center gap-1 px-5 py-3 font-bold rounded-full text-white bg-primary hover:shadow-md hover:bg-white hover:text-primary transition ease-in-out duration-300'
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className='w-full h-full flex items-center justify-around border-t bg-black'>
          <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-around w-full px-6 gap-4 py-6'>
            <div className='w-full flex items-center justify-center text-sm'>
              <p>Copyright© 2025 ManikaGoyal. All Rights Reserved.</p>
            </div>
            <div className='flex items-center justify-center gap-2 w-full'>
              <img src='/social-icon/behance.svg' alt="behance" className='w-4 h-4' />
              <img src='/social-icon/instagram.svg' alt="instagram" className='w-4 h-4' />
              <img src='/social-icon/linkedin.svg' alt="linkedin" className='w-4 h-4' />
            </div>
            <div className='w-full flex items-center justify-center text-sm'>
              User Terms & Conditions | Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
