'use client';
import Link from 'next/link';
import { Button } from './ui/button';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

//componenets
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/coffee.png',
    category: 'DJANGO, HTML , BOOTSTRAP',
    name: 'E-commerce Website',
    description:
      'I created a E-website with DJANGO that have a contend management system.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/komi.png',
    category: 'DJANGO, HTML , BOOTSTRAP',
    name: 'Portfolio website # 1',
    description:
      'I created this website for my self and host it in pythonanywhere',
    link: '/',
    github: '/',
  },
  {
    image: '/work/portfolio.png',
    category: 'next.js',
    name: 'Portfolio website #2',
    description:
      'I created a Portfolio website using next.js',
    link: '/',
    github: '/',
  },
  {
    image: '/work/aipc.png',
    category: 'Next.js, Express.js, Postgress',
    name: 'AI Pilipinas Community',
    description:
      'I volunteered to make a platform in this community',
    link: '/',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div
          className=" max-w-[400px] 
        mx-auto xl:mx-0 text-center xl:text-left
         mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4 ">Latest Project</h2>
          <p className="subtitle mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            deserunt.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/*  */}
        <div className="xl:max-w-[950px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  {/* project is a prop to the projectcard folder wow */}
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
