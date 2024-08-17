import React from 'react'
import Slider from 'react-slick'
import Poster from './Poster.Component'

const PosterSliderComponent = (props) => {
  const {title,subtitle,poster,isDark,config}=props;
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow:5,
    speed:500,
    slidesToScroll: 5,
    

  };
  return <>
  <div className='flex flex-col items-start sm:ml-3 my-2'>
  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
  {title}
</h3>

   <p className={`text-sm  ${isDark ? 'text-white': 'text-gray-800'}`}>{subtitle}</p>
  </div>
  <Slider {...settings}> 
  {  poster.map((each,index)=>(
<Poster {...each} isDark={isDark} key={index}/>

    ))}

    
  </Slider>
  </>
  
     
  
    
  
  
  
  
}

export default PosterSliderComponent