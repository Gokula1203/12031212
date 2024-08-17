import React from 'react'
// For cast and crew in below the cast page that rounded page of cast and crew things setting
const CastComponents = (props) => {
  return (
    <div>
      <div className='flex flex-col items-start'>
        <div className='w-32 h-32'>
<img src={`https://image.tmdb.org/>t/p/original${props.image}`} alt="" className='w-full h-full rounded-full object-cover object-center'/>
        </div>
        <h1 className='text-xl text-gray-800'>{props.castName}</h1>
        <h5 className='text-sm text-gray-500'>{props.role}</h5>
      </div>
    </div>
  )
}

export default CastComponents
