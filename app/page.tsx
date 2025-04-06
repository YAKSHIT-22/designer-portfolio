"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSection from "@/components/ui/projectSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRouter } from "next/navigation";

const tools = [
  {
    name: "Figma",
    icon: "/tools/figma.png",
  },
  {
    name: "Adobe Illustrator",
    icon: "/tools/adobe.png",
  },
  {
    name: "Adobe Photoshop",
    icon: "/tools/photoshop.png",
  },
  {
    name: "Adobe After Effects",
    icon: "/tools/id.png",
  },
  {
    name: "Pencil",
    icon: "/tools/pencil.png",
  },
  {
    name: "Miro",
    icon: "/tools/miro.png",
  },
  {
    name: "C",
    icon: "/tools/c.png",
  },
  {
    name: "face",
    icon: "/tools/face.png",
  },
  {
    name: "max",
    icon: "/tools/max.png",
  },
];

const timeline = [
  {
    year: "Aug 2024- July 2026",
    institution: "NIFT, Panchkula",
    title: "Master’s of Design",
    description:
      "Crafting seamless and impactful user experiences through research-driven design.",
  },
  {
    year: "Aug 2018- July 2022",
    institution: "PLCSUPVA, Rohtak",
    title: "Bachelor's of Design",
    description:
      "Developed a strong foundation in fashion, design principles, and creative problem-solving.",
  },
];

const Page = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/hero-image/heropage.svg", "/hero-image/heropage1.svg"];
  const router = useRouter();
  const handleMailClick = () => {
    const mailtoLink = `mailto:Goyalmanika22@gmail.com?subject=Portfolio Contact&body=Hi Manika`;
    window.location.href = mailtoLink;
  };
  const goTOCV = () => {
    router.push(
      "https://drive.google.com/drive/folders/1CeEn4tHPNY8B1flG9-JWLsigUkLjf0-h?usp=sharing"
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="w-full h-full flex items-start justify-start font-popp tracking-tighter">
        <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 pt-28 sm:pt-36 md:pt-44 scroll-pt-44">
          <div className="flex flex-col items-center justify-start gap-6 w-full h-full">
            <div className="border-primary border-2 flex items-center justify-center rounded-full px-4 py-2 md:px-6 md:py-3">
              <h6 className="text-xs md:text-sm font-bold">Hello!</h6>
            </div>

            <div className="flex items-center justify-center w-full h-full flex-col gap-4">
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                I'm <span className="text-primary">Manika,</span>
              </h1>
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Experience Designer
              </h1>
            </div>

            <div className="relative w-full h-auto flex items-center -mt-26 xs:-mt-24 sm:-mt-18 md:-mt-22 lg:-mt-26 justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentImage]}
                  src={images[currentImage]}
                  alt="hero"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-84 xs:h-86 sm:h-92 md:h-96 lg:h-128 object-contain"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-12 w-full h-full pt-24 pb-12">
            <div className="flex items-center justify-center">
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                My Projects
              </h1>
            </div>
            <div className="flex items-center justify-center text-center max-w-6xl">
              <p className="font-normal md:text-xl sm:text-lg text-base">
                "Step into my illustration gallery, where creativity meets
                storytelling. Through a blend of digital and traditional
                mediums, I bring ideas to life with expressive visuals and
                intricate details."
              </p>
            </div>
            <ProjectSection />
          </div>
          <div className="flex flex-col items-center justify-center gap-12 w-full h-full py-4">
            <div className="flex items-center justify-center">
              <h1 className="font-semibold text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Tools I Work On
              </h1>
            </div>
            <div className="w-full px-4 md:px-12 md:py-12 py-4 max-w-4xl">
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
              >
                {tools.map((tool, index) => (
                  <SwiperSlide key={index} className="flex gap-2">
                    <div className="w-full flex flex-col items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 aspect-square hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-2 mb-20 h-full flex items-start justify-start font-popp tracking-tighter">
        <div className="bg-white pt-12 pb-12 px-6  w-full h-full flex items-start justify-start">
          <div className="flex items-center justify-start w-full gap-8 flex-col h-full">
            <div className="w-full flex items-center justify-center">
              <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
                My <span className="text-primary">Education</span>
              </h1>
            </div>
            <div className="flex items-center justify-center w-full h-full py-12">
              <div className="relative w-full max-w-3xl">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 mb-12 last:mb-0 w-full"
                  >
                    <div className="w-full flex-col gap-2 text-end text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#344054]">
                      <p className="w-full"> {item.institution}</p>
                      <p className="text-[#98A2B3] text-xs font-normal">
                        {item.year}
                      </p>
                    </div>
                    <div className="relative flex flex-col items-center w-full">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border border-dashed border-[#344054] z-10">
                        <div className="w-[18px] h-[18px] rounded-full bg-primary"></div>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="h-34 xss:h-30 sm:h-22 border-l border-dashed border-[#344054] absolute top-6"></div>
                      )}
                    </div>
                    <div className="w-full text-sm sm:text-base md:text-lg lg:text-xl">
                      <p className="w-full text-[#344054] font-semibold">
                        {item.title}
                      </p>
                      <p className="w-full text-[10px] md:text-xs text-[#98A2B3] font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-18 mb-18 h-full flex items-start justify-start font-popp tracking-tighter">
        <div className="flex items-center justify-center w-full h-full flex-col gap-12">
          <div className="flex items-center justify-center max-w-xl flex-col gap-2">
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
              Design is not for
            </p>
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
              <span className="text-primary">Philosophy</span>
            </p>
            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
              it’s for life.
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full sm:flex-row flex-col gap-6">
            <button
              onClick={handleMailClick}
              className={`flex flex-row text-sm items-center justify-center gap-1 px-8 py-4 font-bold rounded-full text-white transition-colors duration-300
        ${"bg-primary"}
        `}
            >
              Let’s Connect{" "}
              <span className="flex items-center justify-center">
                <img src="/arrowright.svg" alt="arrow" className="w-4 h-4" />
              </span>
            </button>
            <button
              onClick={goTOCV}
              className={`flex flex-row text-sm items-center justify-center gap-1 px-8 py-4 font-bold rounded-full text-white transition-colors duration-300
        ${"bg-transparent border-primary border-2"}
        `}
            >
              Download CV{" "}
              <span className="flex items-center justify-center">
                <img src="/arrowright.svg" alt="arrow" className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
