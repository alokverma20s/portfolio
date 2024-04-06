import React,{useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { HiChevronLeft , HiChevronRight} from 'react-icons/hi';

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import './Testimonials.scss';
import { images } from '../../constants';

const Testimonials = () => {
  // const [brands, setBrands] = useState([]);
  // const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const brands = [
    {_id: 1, name: "Skype", imgUrl: images.skype},
    {_id: 2, name: "Spotify", imgUrl: images.spotify},
    {_id: 3, name: "New Balance", imgUrl: images.nb},
    {_id: 4, name: "Bolt", imgUrl: images.bolt},
  ]
  const testimonials = [
    { name: "Alok Verma", company: "XYZ", feedback: "Great job, would recommended! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste eaque qui modi numquam? Rerum ex corrupti molestias, odit sunt non sit impedit culpa laudantium, aliquam dignissimos accusamus fugiat asperiores ea rem aperiam amet. Cumque incidunt iste vero nihil, accusantium repudiandae sequi rerum hic accusamus error alias modi voluptate veniam.", imgurl: images.cpp},
    { name: "Aman Pal", company: "ABC", feedback: "He is a legend man. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste eaque qui modi numquam? Rerum ex corrupti molestias, odit sunt non sit impedit culpa laudantium, aliquam dignissimos accusamus fugiat asperiores ea rem aperiam amet.", imgurl: images.html},
    { name: "AI Resercher", company: "EFG", feedback: "He is a Pro-Player. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste eaque qui modi numquam? Rerum ex corrupti molestias, odit sunt non sit impedit culpa laudantium, aliquam dignissimos accusamus fugiat asperiores ea rem aperiam amet.", imgurl: images.next},
    { name: "AI Resercher", company: "EFG", feedback: "Very good portfolio Website", imgurl: images.abhay},
  ]

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';
  //   const brandsQuery = '*[_type == "brands"]';

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });

  //   client.fetch(query).then((data) => {
  //     console.log(data);
  //     setTestimonials(data);
  //   });
  // }, []);

  const handleClick = (index) =>{
    setCurrentIndex(index);
  }

  const test  =testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={test.imgurl} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={()=> handleClick(currentIndex ===  0 ? testimonials.length-1: currentIndex-1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={()=> handleClick(currentIndex ===  testimonials.length-1 ? 0: currentIndex+1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonials-brands app__flex">
        {brands?.map((brand)=>(
          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5 , type:'tween'}}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials,'app__testimonials'),
  'testimonials',
  'app__primarybg'  
);
