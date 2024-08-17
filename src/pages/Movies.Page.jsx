import React, { useContext, useEffect, useState } from 'react';
import MovieLayout from '../layout/Movie.Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaCcApplePay, FaCcVisa } from 'react-icons/fa';
import { MovieContext } from '../context/Movie.Context';
import PosterSliderComponent from '../components/PosterSlider/PosterSlider.Component';
import MovieHeroComponent from '../components/MovieHero/MovieHero.Component';

import Slider from 'react-slick';
import CastComponents from '../components/CastComponents/Cast.Component';




const MovieCast = () => {
  const { id } = useParams(); // Correctly call useParams
  const { movie, setMovie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [exclusiveMovies, setExclusiveMovies] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a95b5a76f2f8f636fb8d561a00015bc0`);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [id]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a95b5a76f2f8f636fb8d561a00015bc0`);
        setSimilarMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    };

    fetchSimilarMovies();
  }, [id]);

  useEffect(() => {
    const fetchExclusiveMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=a95b5a76f2f8f636fb8d561a00015bc0`);
        setExclusiveMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching exclusive movies:', error);
      }
    };

    fetchExclusiveMovies();
  }, [id]);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a95b5a76f2f8f636fb8d561a00015bc0`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        // Handle the error, e.g., show a user-friendly message
      }
    };

    fetchMovieData();

    // Optionally return a cleanup function if needed
    return () => {
      // Cleanup logic, if any
    };
  }, [id]); // Dependency array ensures the effect runs when `id` changes

  // Render your component based on `movie` state
  const settingsCast={
    arrows: true,
    infinite: false,
    slidesToShow:5,
    speed:500,
    slidesToScroll: 4,
  }; // Add your settings for Slider here
  const settings={
    arrows: true,
    infinite: false,
    slidesToShow:5,
    speed:500,
    slidesToScroll: 4,
  }; // Add your settings for Slider here

  return (
    <>
  <MovieHeroComponent />
    <div className='container my-12 px-4 lg:w-2/1'>
      <div className='flex flex-col items-start gap-3'>
        <h1 className='text-gray-800 font-bold gap-3'>About The Movie</h1>
        <p>{movie?.overview || 'No overview available'}</p>
      </div>

      <div className='my-8'>
        <hr />
      </div>

      <div className='my-8'>
        <h2 className='text-gray-800 font-bold text-2xl mb-3'>Applicable Offer</h2>
        <div className='flex flex-col gap-3 lg:flex-row'>
          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaCcVisa className='w-full h-full' />
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>Visa Stream</h3>
              <p className='text-gray-600'>Get 50% offer upto 150INR on all Rupay Card On Book My Show</p>
            </div>
          </div>

          <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
            <div className='w-8 h-8'>
              <FaCcApplePay className='w-full h-full' />
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-gray-700 text-xl font-bold'>Film Pass</h3>
              <p className='text-gray-600'>Get 50% offer upto 150INR on all Rupay Card On Book My Show</p>
            </div>
          </div>
        </div>
      </div>
      <div className='my-8'>
        <hr />
      </div>
      
      <div className='my-8'>
       <h2 className='text-gray-800 font-bold text-2xl mb-4'>Cast And Crew</h2>
       <Slider {...settingsCast}>
      {cast.map((castData)=>(
        <CastComponents image={castData.profile_path} castName={castData.original_name} role={castData.character}/>
      ))}
       </Slider>
      </div>

      <div className='my-8'>
        <hr />
      </div>
      <div className='my-8'>
       <h1>Recommended Movies</h1>
       {/* <PosterSliderComponent config={settings}/> */}
      </div>
      <div className='my-8'>
        <hr />
      </div>
      <div className='my-8'>
        <h1>BMX Exclusive</h1>
      </div>
      <div className='my-8'>
        <hr />
      </div>
    </div>
    </>
  );
}

export default MovieLayout(MovieCast);
