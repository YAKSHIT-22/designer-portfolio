const allProjectsRelatedToId = [
  {image: "/typography/typography.png", title: "Typography"},
  {image: "/typography/typography-01.png", title: "Typography"},
  {image: "/typography/typography-02.png", title: "Typography"},
  {image: "/typography/typography-03.png", title: "Typography"},
  {image: "/typography/typography-05.png", title: "Typography"},
  {image: "/typography/typography-06.png", title: "Typography"},
  {image: "/typography/typography-07.png", title: "Typography"},
  {image: "/typography/typography-13.png", title: "Typography"}
]

const ProjectPage = () => {
  return (
    <section className='w-full h-full flex items-start justify-start font-popp tracking-tighter'>
      <div className='w-full h-full flex items-start justify-start px-2 py-2 pt-24 scroll-pt-24'>
        <div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
          <div className='w-full h-full flex items-center justify-center pt-44 scroll-pt-44 pb-32'>
            <h1 className='text-2xl md:text-4xl font-semibold lg:text-5xl text-white'>Typography</h1>
          </div>
          <div className='grid grid-cols-1 items-center justify-center'>
            {allProjectsRelatedToId.map(item=>(<div className="w-full h-full">
                <img src={item.image}  alt={item.title} className='w-full h-full'/>
              </div>)
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage