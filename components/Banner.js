"use client"
import './../styles/banner.css';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const images = [
  "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn1.jpg",
  "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn2.jpg",
  "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn3.jpg",
]

const Banner = () => {
  return (
    <section id='home' className='banner'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}
        className="img-container"
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image} alt={image} width={1920} height={1280} priority/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="box">
        <strong>Explore The World <i className='fa-solid fa-globe'></i></strong>
        <h1>It's a Big World Out There, Go Explore</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quis!</p>
        <a href="#">Explore Now</a>
      </div>
    </section>
  )
}

export default Banner