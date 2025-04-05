"use client"
import ProjectCard from '@/components/ui/projectCard';
import ShowMoreButton from '@/components/ui/showMoreButton';
import React, { useState } from 'react'

const allIllustrations = [
  { image: '/illustrations/3dbookillustration2.png', title: '3D book illustration' },
  { image: '/illustrations/papercuteffect2.png', title: 'Paper cut effect' },
  { image: '/illustrations/papercuteffect4.png', title: 'Paper cut effect' },
  { image: '/illustrations/papercuteffect5.png', title: 'Paper cut effect' },
  { image: '/illustrations/papercuteffect.png', title: 'Paper cut effect' },
  { image: '/illustrations/papercuteffect3.png', title: 'Paper cut effect' },
  { image: '/illustrations/coffee.png', title: 'Coffee' },
  { image: '/illustrations/livingroomcorner.png', title: 'Living room corner' },
  { image: '/illustrations/abstract.png', title: 'Abstract' },
  { image: '/illustrations/panchayat.png', title: 'Panchayat' },
  { image: '/illustrations/3dbookillustration.png', title: '3D book illustration' },
  { image: '/illustrations/panchayat2.png', title: 'Panchayat' },
]

const page = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const isAllVisible = visibleCount >= allIllustrations.length;
  return (
    <section className="w-full h-full flex items-start justify-start font-popp tracking-tighter">
      <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 pt-44 scroll-pt-44">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-8">
          {allIllustrations.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} id={`${index}`} image={project.image} title={project.title} />
          ))}
        </div>

        <ShowMoreButton onClick={handleShowMore} disabled={isAllVisible} />
      </div>
    </section>
  )
}

export default page