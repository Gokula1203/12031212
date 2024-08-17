import React, { useContext, useState } from 'react';
import { MovieContext } from '../../context/Movie.Context';
import PaymentComponent from '../../PaymentComponent/Payment.Component';

const MovieInfoComponent = () => {
    const { movie } = useContext(MovieContext);
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    // Handle genres
    const genres = movie.genres?.map(({ name }) => name).join(', ');

    // Functions to handle renting and buying movies
    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(399);
    };

    if (!movie) {
        return <p className='text-white'>Loading...</p>; // Handle the case where movie data is not yet available
    }

    return <>
        <PaymentComponent setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className='flex flex-col gap-8'>
            <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
            <div className='flex flex-col gap-2 md:px-4 text-white'>
                <h4>5k Rating</h4>
                <h4>Hindi, English, Tamil, Telugu</h4>
                <h4>{movie.runtime} min | {genres}</h4>
            </div>
            <div className='flex items-start gap-3 w-full'> 
<button onClick={rentMovie} className='bg-red-600 w-full px-7 py-4 text-white font-semibold rounded-lg hover:bg-red-400'>Rent ₹149</button>
<button onClick={buyMovie} className='bg-red-600 w-full px-7 py-4 text-white font-semibold rounded-lg hover:bg-red-400'>Buy ₹399</button>
        </div>
        </div>
        </> 
};

export default MovieInfoComponent;
