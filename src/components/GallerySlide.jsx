import React from 'react';
import Slider from 'react-slick';


const GallerySlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://assets-global.website-files.com/61bc763d72a0c6a0551afca9/61fae3448eb989184f828084_5f57c46384cca65e79589acf_students1.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default GallerySlide;
