import React, { useState } from 'react'
import DefaultLayout from '../layout/Default.Layout'
import EntertainmentCardComponent from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarouselComponent from '../components/HeroCarousal/HeroCarousel.Component'
import PosterSliderComponent from '../components/PosterSlider/PosterSlider.Component'

const HomePage = () => {
    const [recommendedmovies,setRecommendedmovies] = useState([])
    const [premiermovies,setPremiermovies] = useState([])
    const [onlinestreamevents,setOnlinestreamevents] = useState([])

  return (
    <div>
        {/* Hero Carousel */}
        <div>
<HeroCarouselComponent/>
</div>
{/* EntertainmentCard */}
<div className='container mx-auto px-4 md: mx-12 my-8'>
<h1 className='text-2xl font-bold text-grey-800 sm: ml-3 my-3'>The Best Entertainment Show</h1>
<EntertainmentCardComponent />
</div>

{/* PosterSlider */}
<div>
<PosterSliderComponent
title="Recommended Movies"
subtitle="List of Recommended Movies"
poster={recommendedmovies}
isDark={false}
/>
</div>

{/* Premier */}
<div className='bg-premier-800 py-12'>
<div className='container mx-auto px-4 md: mx-12 my-8 flex flex-col gap-3'>
<div className='hidden md:flex'>
    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className='w-full h-full'/>
</div>
<div>
<PosterSliderComponent 
title="Premier"
subtitle="Brand New Relase Every Friday"
poster={premiermovies}
isDark={true}
/>
</div>
</div>

</div>
{/* Online Streaming Events */}
<div>
<PosterSliderComponent 
title="Online Streaming Events"
subtitle="Events"
poster={onlinestreamevents}
isDark={false}
/>
</div>
    </div>
   
  )
}

export default DefaultLayout(HomePage)