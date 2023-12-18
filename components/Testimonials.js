'use client'
import React from 'react';
import '../styles/testimonials.css';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';


const testimonials = [
  {
    id: 1,
    name: 'Hera Cosmetic',
    avata: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquid ducimus porro?'
  },
  {
    id: 2,
    name: 'Hera Cosmetic',
    avata: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquid ducimus porro?'
  },
  {
    id: 3,
    name: 'Hera Cosmetic',
    avata: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquid ducimus porro?'
  },
  {
    id: 4,
    name: 'Hera Cosmetic',
    avata: 'https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/t-member.jpg?raw=true',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquid ducimus porro?'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">

      <div className="img-container">
        <Image
          src='https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ts.png?raw=true'
          alt='https://github.com/devat-youtuber/travel-nextjs13beta-images/blob/main/ts.png?raw=true'
          width={488}
          height={482}
        />
      </div>

      <div className="slider">
        <h2>Client's Review</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quasi?</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {
            testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <div className="card" >
                <div className="text">
                  <i className='fas fa-quote-left'></i>
                  <p>{testimonial.text}</p>
                  <strong>{testimonial.name}</strong>
                </div>

                <div className="avatar">
                  <Image
                    src={testimonial.avata}
                    alt={testimonial.avata}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials