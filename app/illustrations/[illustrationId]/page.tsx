'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';

const singleIllustration = [
  { image: "/illustration-single/illustration1.png", title: "Assam Women Illustration" },
  { image: "/illustration-single/illustration2.png", title: "Illustration 2" },
  { image: "/illustration-single/illustration3.png", title: "Illustration 3" },
  { image: "/illustration-single/illustration4.png", title: "Illustration 4" },
  { image: "/illustration-single/illustration5.png", title: "Illustration 5" },
  { image: "/illustration-single/illustration6.png", title: "Illustration 6" },
  { image: "/illustration-single/illustration7.png", title: "Illustration 7" },
  { image: "/illustration-single/illustration8.png", title: "Illustration 8" },
  { image: "/illustration-single/illustration9.png", title: "Illustration 9" },
  { image: "/illustration-single/illustration10.png", title: "Illustration 10" },
  { image: "/illustration-single/illustration11.png", title: "Illustration 11" },
];

const IllustrationPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIllustration = singleIllustration[activeIndex];

  return (
    <section className="w-full h-full flex items-start justify-start font-popp tracking-tighter">
      <div className="w-full h-full flex items-start justify-start px-4 sm:px-8 md:px-12 pt-28 sm:pt-36 md:pt-44 scroll-pt-44">
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          <div className="w-full flex items-start justify-start pb-8 text-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeIllustration.title}
                className="text-2xl md:text-3xl font-semibold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {activeIllustration.title}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="flex w-full items-start justify-start h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIllustration.image}
                src={activeIllustration.image}
                alt={activeIllustration.title}
                className="w-full h-full antialiased"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center w-full h-full pt-12 pb-24">
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
            >
              {singleIllustration.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-60 !h-auto cursor-pointer"
                >
                  <div
                    onClick={() => setActiveIndex(index)}
                    className={`w-full h-full border-4 overflow-hidden transition-transform duration-200 ${
                      index === activeIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-fill"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IllustrationPage;
