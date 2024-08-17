import React, { useContext } from 'react'
import { MovieContext } from '../../context/Movie.Context'
import MovieInfoComponent from './MovieInfo.Component'

const MovieHeroComponent = () => {
    const {movie} = useContext(MovieContext)
    const genres = movie.genres?.map(({name})=> name).join(" ")
    // console.log(genres)
  return (
    <div>
        {/* Mobile Screen Devices */}
     <div className='lg:hidden w-full'>
    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className='m-4 rounded'/>
     </div>
     <div className='flex flex-col gap-3 lg:hidden'>
        <div className='flex flex-col-reverse gap-2 px-4 my-3'>
            <div className='flex flex-col gap-2 md:px-4 text-black'>
                <h4>5k Rating</h4>
                <h4>Hindi,English,Tamil,Telugu</h4>
                <h4>{movie.runtime}min | {genres}</h4>
            </div>
        </div>
        <div className='flex items-start gap-3 md:px-4'> 
<button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>Rent ₹149</button>
<button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>Buy ₹399</button>
        </div>
     </div>

     {/* Large Screen Devices */}

     <div className='relative hidden w-full lg:block style=' style={{height:"30rem"}}>
        <div className='absolute w-full h-full z-50' style={{background:"linear-gradient(90deg, rgb(34,34,34)25%,rgba(34,34,34,0.5)60%,rgba(34,34,34,0.04)99%)"}}>
       <div className='absolute z-10 left-24 top-10 flex items-center gap-10'>
       <div className='w-64 h-96'>
       <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="hero poster" className='w-full h-full rounded-lg'/>
       </div>
       <div>
       <MovieInfoComponent movie={movie} />
       </div>
       </div>
       <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt="Back Poster" className='w-full h-full object-cover object-center' />
        </div>
     </div>
    </div>
  )
}

export default MovieHeroComponent
