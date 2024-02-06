import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TestimonialSlider = () => {
  return (
    <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'
    >     
        <ClientReview 
          image="/img/c1.jpg"
          name="Sajal Talukder"
          role="Web Developer"
        />    
        <ClientReview 
          image="/img/c2.jpg"
          name="Talukder"
          role="MERN Stack Developer"
        />
        <ClientReview 
          image="/img/c1.jpg"
          name="Anas"
          role="React Developer"
        />
        <ClientReview 
          image="/img/c2.jpg"
          name="Rakibul Anas"
          role="Next js Developer"
        />
    </Carousel>
  )
}

export default TestimonialSlider