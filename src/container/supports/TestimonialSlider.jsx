import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialSlider.css'; 
import saurabh from '../../assets/saurabh.jpg'

import { Navigation, Pagination } from 'swiper/modules';

const testimonials = [
  {
    name: 'Sweta Shaw',
    designation: 'Lead Full Stack Blockchain Developer at Questbook',
    message:
      'The environment that TPG builds for women is fantastic. You get to learn, network, and the best part is that everyone uplifts each other. The female gang that everyone needs.',
    image: saurabh,
  },
  {
    name: 'John Doe',
    designation: 'Software Engineer at TechCorp',
    message:
      'This experience has been transformational. I’ve gained new skills and collaborated with amazing people.',
    image: 'path/to/image2.jpg',
  },
  {
    name: 'Jane Smith',
    designation: 'Product Manager at InnovateX',
    message:
      'The network and opportunities created here are unlike anything else. A truly supportive environment!',
    image: 'path/to/image3.jpg',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <h1 className="supports_h1">Testimonials</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-message">
                <p>{testimonial.message}</p>
                <h3>{testimonial.name}</h3>
                <p className="designation">{testimonial.designation}</p>
              </div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
