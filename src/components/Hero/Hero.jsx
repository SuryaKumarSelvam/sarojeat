import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {heroData} from '../../data'
import './Hero.css';

const Hero = () => {
//     const [images, setImages] = useState([]);

//   useEffect(() => {
    
//     fetch("")
//       .then((response) => response.json())
//       .then((data) => setImages(data))
//       .catch((error) => console.error("Error fetching images:", error));
//   }, []);

    const slides = heroData;
  return (
    <>
    <section className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide,index) => (
          <SwiperSlide key={index} className="hero-slide">
            <div
              className="slide-image"
              style={{
                backgroundImage: `url(${slide.imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>  
    </section>
     <div className="paragraph with-heading ">
            <div className="max-width-grid text-left visible-links" >
                <p>At Saroeats, we craft sweets with a blend of tradition and passion. Using cherished family recipes passed down through generations, each treat is made with love and care to bring you the authentic taste of homemade sweetness. Experience the joy of our timeless confections, made just the way they should be — with heart and soul.</p>
            </div>
    </div>
    </>
  )
}

export default Hero