"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const timeline = [
  { year: "2018", description: "Started Bachelor's in Fashion Design" },
  { year: "2022", description: "First freelance project in Graphic Design" },
  {
    year: "2024",
    description: "Pursuing Master's in Experience Design (UI/UX)",
  },
  {
    year: "2025",
    description: "Designing different experience based projects.",
  },
];

const thoughts = [
  {
    id: 1,
    description: "I create art journals and sketchbooks."
  },
  {
    id: 2,
    description: "I'm obsessed with color psychology and how it influences emotions."
  },
  {
    id: 3,
    description: "I love exploring public spaces and studying their design."
  },
  {
    id: 4,
    description: "I believe every design has a story – and I love telling them!"
  },
  {
    id: 5,
    description: "NIFT has an AI-powered trend research lab for forecasting future fashion trends."
  },
]

const page = () => {
  return (
    <>
      <section className="w-full h-full flex items-start justify-start font-popp tracking-tighter">
        <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 pt-28 sm:pt-36 md:pt-44 scroll-pt-44">
          <div className="flex flex-col items-center justify-start gap-6 w-full h-full">
            <div className="w-full flex items-center justify-center flex-col gap-8">
              <img
                src="/hero-image/about.svg"
                alt="About Us"
                className="lg:w-[40%] lg:h-[40%] md:w-[55%] md:h-[55%] w-[70%] h-[70%]"
              />
              <h1 className="text-primary tracking-tight font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Hi! I’m Manika Goyal
              </h1>
            </div>
            <div className="mt-20 mb-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center w-full h-full gap-4">
              <div className="bg-secondary  px-8 py-6 font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl w-full h-full flex items-center justify-center">
                <p className="text-center">
                  A passionate designer specializing in{" "}
                  <span className="text-primary">
                    UI/UX, branding, and digital storytelling.
                  </span>{" "}
                  With a strong foundation in{" "}
                  <span className="text-primary">
                    fashion and graphic design,
                  </span>{" "}
                  I strive to create experiences that blend aesthetics and
                  functionality seamlessly. I love experimenting with colors,
                  typography, and visual narratives to bring ideas to life.
                </p>
              </div>
              <div className="bg-secondary px-8 py-6 font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl w-full h-full flex items-center justify-center">
                <p className="text-center">
                  My work is driven by the belief that{" "}
                  <span className="text-primary">
                    design has the power to evoke emotions and transform
                    interactions.
                  </span>{" "}
                  Whether crafting intuitive digital interfaces, bold brand
                  identities, or immersive visual experiences, I focus on user
                  engagement and creative storytelling.
                </p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1 bg-secondary px-8 py-6 font-bold text-center text-sm sm:text-base md:text-lg lg:text-xl w-full h-full flex items-center justify-center">
                <p className="text-center">
                  I’m proficient in{" "}
                  <span className="text-primary">
                    Adobe Illustrator, Photoshop, InDesign, Figma, Clo 3D, and
                    3ds Max,
                  </span>{" "}
                  allowing me to experiment across different design disciplines.
                  Beyond design, I enjoy{" "}
                  <span className="text-primary">
                    photography, art journaling, digital painting, and exploring
                    new creative tools.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-2 mb-20 h-full flex items-start justify-start font-popp tracking-tighter">
        <div className="bg-white pt-12 pb-12 px-6  w-full h-full flex items-start justify-start">
          <div className="flex items-center justify-start w-full gap-8 flex-col h-full">
            <div className="w-full flex items-center justify-center">
              <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-5xl text-black">
                My <span className="text-primary">Timeline</span>
              </h1>
            </div>
            <div className="flex items-center justify-center w-full h-full py-12">
              <div className="relative w-full max-w-3xl">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 mb-12 last:mb-0 w-full"
                  >
                    <div className="w-full text-end text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#344054]">
                      <p className="w-full"> {item.year}</p>
                    </div>
                    <div className="relative flex flex-col items-center w-full">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border border-dashed border-[#344054] z-10">
                        <div className="w-[18px] h-[18px] rounded-full bg-primary"></div>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="h-32 xss:h-28 sm:h-22 border-l border-dashed border-[#344054] absolute top-6"></div>
                      )}
                    </div>
                    <div className="w-full text-sm sm:text-base md:text-lg lg:text-xl">
                      <p className="w-full text-[#344054] font-semibold">
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
       <div className="flex items-center justify-center w-full h-full pt-12 pb-24 px-12">
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {thoughts.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-44 md:!w-72 !h-auto cursor-pointer"
                >
                  <div
                    className={`w-full flex items-center justify-center h-full rounded-[40px] text-center bg-secondary px-4 sm:px-6 md:px-8 py-8 overflow-hidden transition-transform duration-200`}
                  >
                    <p className="font-bold text-base sm:text-lg text-center md:text-xl">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </section>
    </>
  );
};

export default page;
